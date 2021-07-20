<?php
namespace Domain\Files\Controllers;

use Illuminate\Http\Response;
use Domain\Sharing\Models\Share;
use Support\Services\HelperService;
use App\Http\Controllers\Controller;
use Support\Demo\Actions\DemoService;
use Domain\Files\Requests\UploadRequest;
use Domain\Files\Actions\UploadFilesAction;

/**
 * guest user upload file into shared folder
 */
class EditorUploadFilesController extends Controller
{
    public function __construct(
        public HelperService $helper,
        public DemoService $demo,
    ) {
    }

    public function __invoke(
        UploadFilesAction $uploadFile,
        UploadRequest $request,
        Share $shared,
    ): Response | array {
        if (is_demo_account($shared->user->email)) {
            return $this->demo->upload($request);
        }

        // Check ability to access protected share record
        $this->helper->check_protected_share_record($shared);

        // Check shared permission
        if (is_visitor($shared)) {
            abort(403);
        }

        // Check access to requested directory
        $this->helper->check_item_access($request->folder_id, $shared);

        // Return new uploaded file
        $new_file = ($uploadFile)($request, $shared);

        // Set public access url
        $new_file->setPublicUrl($shared->token);

        return response($new_file, 201);
    }
}