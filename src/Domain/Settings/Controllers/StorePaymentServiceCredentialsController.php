<?php

namespace Domain\Settings\Controllers;

use Domain\Settings\Requests\StorePaymentServiceCredentialsRequest;
use Domain\Settings\Models\Setting;
use Illuminate\Http\Response;
use Artisan;

class StorePaymentServiceCredentialsController
{
    /**
     * Configure stripe additionally
     */
    public function __invoke(StorePaymentServiceCredentialsRequest $request): Response
    {
        // Abort in demo mode
        abort_if(is_demo(), 204, 'Done.');

        // Try to get stripe account details
        /*try {
            if (!app()->runningUnitTests()) {
                Stripe::make($request->input('secret'), '2020-03-02')
                    ->account()
                    ->details();
            }
        } catch (UnauthorizedException $e) {
            throw new HttpException(401, $e->getMessage());
        }*/

        $options = [
            'stripe'   => [
                'name'  => 'allowed_stripe',
                'value' => 1,
            ],
            'paypal'   => [
                'name'  => 'allowed_paypal',
                'value' => 1,
            ],
            'paystack' => [
                'name'  => 'allowed_paystack',
                'value' => 1,
            ],
        ];

        // Get options
        collect([$options[$request->input('service')]])
            ->each(fn($setting) => Setting::updateOrCreate([
                'name' => $setting['name'],
            ], [
                'value' => $setting['value'],
            ]));

        // Get and store credentials
        if (!app()->runningUnitTests()) {
            $credentials = [
                'stripe'   => [
                    'STRIPE_PUBLIC_KEY' => $request->input('key'),
                    'STRIPE_SECRET_KEY' => $request->input('secret'),
                ],
                'paystack' => [
                    'PAYSTACK_PUBLIC_KEY' => $request->input('key'),
                    'PAYSTACK_SECRET'     => $request->input('secret'),
                ],
                'paypal'   => [
                    'PAYPAL_CLIENT_ID'     => $request->input('key'),
                    'PAYPAL_CLIENT_SECRET' => $request->input('secret'),
                ],
            ];

            // Store credentials into the .env file
            setEnvironmentValue($credentials[$request->input('service')]);

            // Clear cache
            if (! is_dev()) {
                Artisan::call('cache:clear');
                Artisan::call('config:clear');
                Artisan::call('config:cache');
            }
        }

        return response('Done', 204);
    }
}