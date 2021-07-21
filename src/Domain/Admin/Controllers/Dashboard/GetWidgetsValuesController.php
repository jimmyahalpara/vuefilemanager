<?php
namespace Domain\Admin\Controllers\Dashboard;

use ByteUnits\Metric;
use App\Users\Models\User;
use Laravel\Cashier\Subscription;
use App\Http\Controllers\Controller;

class GetWidgetsValuesController extends Controller
{
    public function __invoke(): array
    {
        // Get total premium users
        $premium_users = Subscription::whereStripeStatus('active')
            ->count();

        // Get total storage usage
        $storage_usage = Metric::bytes(
            \DB::table('files')->sum('filesize')
        )->format();

        return [
            'license'             => get_setting('license'),
            'app_version'         => config('vuefilemanager.version'),
            'total_users'         => User::count(),
            'total_used_space'    => $storage_usage,
            'total_premium_users' => $premium_users,
        ];
    }
}