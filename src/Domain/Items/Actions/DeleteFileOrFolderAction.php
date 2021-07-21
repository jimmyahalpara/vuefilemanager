<?php
namespace Domain\Items\Actions;

use DB;
use Illuminate\Support\Arr;
use Domain\Sharing\Models\Share;
use Domain\Folders\Models\Folder;
use Illuminate\Support\Facades\Storage;
use Domain\Files\Models\File as UserFile;

class DeleteFileOrFolderAction
{
    /**
     * Delete file or folder
     */
    public function __invoke(
        array $item,
        string $id,
        ?Share $shared = null
    ): void {
        // Delete folder
        if ($item['type'] === 'folder') {
            // Get folder
            $folder = Folder::withTrashed()
                ->with('folders')
                ->find($id);

            // Get folder shared record
            $shared = Share::where('type', 'folder')
                ->where('item_id', $id)
                ->first();

            // Delete folder shared record
            if ($shared) {
                $shared->delete();
            }

            // Remove folder from user favourites
            DB::table('favourite_folder')
                ->where('folder_id', $folder->id)
                ->delete();

            // Soft delete items
            if (! $item['force_delete']) {
                // Soft delete folder record
                $folder->delete();
            }

            // Force delete children files
            if ($item['force_delete']) {
                // Get children folder ids
                $child_folders = filter_folders_ids($folder->trashedFolders, 'id');

                // Get children files
                $files = UserFile::onlyTrashed()
                    ->whereIn('folder_id', Arr::flatten([$id, $child_folders]))
                    ->get();

                // Remove all children files
                foreach ($files as $file) {
                    // Delete file
                    Storage::delete("/files/$file->user_id/$file->basename");

                    // Delete thumbnail if exist
                    if ($file->thumbnail) {
                        Storage::delete(
                            "/files/$file->user_id/{$file->getRawOriginal('thumbnail')}"
                        );
                    }

                    // Delete file permanently
                    $file->forceDelete();
                }

                // Delete folder record
                $folder->forceDelete();
            }
        }

        // Delete item
        if ($item['type'] !== 'folder') {
            // Get file
            $file = UserFile::withTrashed()
                ->find($id);

            // Get folder shared record
            $shared = Share::where('type', 'file')
                ->where('item_id', $id)
                ->first();

            // Delete file shared record
            if ($shared) {
                $shared->delete();
            }

            // Force delete file
            if ($item['force_delete']) {
                // Delete file
                Storage::delete("/files/$file->user_id/$file->basename");

                // Delete thumbnail if exist
                if ($file->thumbnail) {
                    Storage::delete(
                        "/files/$file->user_id/{$file->getRawOriginal('thumbnail')}"
                    );
                }

                // Delete file permanently
                $file->forceDelete();
            }

            // Soft delete file
            if (! $item['force_delete']) {
                // Soft delete file
                $file->delete();
            }
        }
    }
}
