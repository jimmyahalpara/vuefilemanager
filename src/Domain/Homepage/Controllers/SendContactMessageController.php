<?php

namespace Domain\Homepage\Controllers;

use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use Domain\Homepage\Mail\SendContactMessage;
use Domain\Homepage\Requests\SendContactMessageRequest;

class SendContactMessageController extends Controller
{
    /**
     * Send contact message from homepage
     */
    public function __invoke(
        SendContactMessageRequest $request
    ): Response {

        $contactEmail = get_setting('contact_email');

        if ($contactEmail) {
            Mail::to($contactEmail)
                ->send(new SendContactMessage($request->all()));
        }

        return response('Done', 201);
    }
}
