import reflex as rx


def terms_content() -> rx.Component:
    return rx.box(
        rx.html(
                """
                <style>
                [data-custom-class='body'], [data-custom-class='body'] * {
                        background: transparent !important;
                        }
                [data-custom-class='title'], [data-custom-class='title'] * {
                        font-family: Arial !important;
                font-size: 26px !important;
                color: #000000 !important;
                        }
                [data-custom-class='subtitle'], [data-custom-class='subtitle'] * {
                        font-family: Arial !important;
                color: #595959 !important;
                font-size: 14px !important;
                        }
                [data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
                        font-family: Arial !important;
                font-size: 19px !important;
                color: #000000 !important;
                        }
                [data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
                        font-family: Arial !important;
                font-size: 17px !important;
                color: #000000 !important;
                        }
                [data-custom-class='body_text'], [data-custom-class='body_text'] * {
                        color: #595959 !important;
                font-size: 14px !important;
                font-family: Arial !important;
                        }
                [data-custom-class='link'], [data-custom-class='link'] * {
                        color: #3030F1 !important;
                font-size: 14px !important;
                font-family: Arial !important;
                word-break: break-word !important;
                        }
                </style>

                    <div data-custom-class="body">
                    <div align="center" style="text-align: left;">
                    <div class="MsoNormal" data-custom-class="title" style="line-height: 1.5;">
                        <bdt class="block-component"><span style="font-size: 19px;"></bdt>
                        <bdt class="question"><strong>TERMS AND CONDITIONS</strong></bdt></br>
                                                End User License Agreement (EULA)

This End User License Agreement ("Agreement") is a legal agreement between you (either an individual or a single entity) and Discoze, the creator of the Vedvaani mobile application ("App"), governing your use of the App. By installing, accessing, or using the Vedvaani App, you agree to be bound by the terms and conditions of this Agreement.

License Grant:
Subject to the terms and conditions of this Agreement, Discoze grants you a limited, non-exclusive, non-transferable, revocable license to use the Vedvaani App for your personal, non-commercial purposes.

Ownership:
The Vedvaani App, including all content, features, and functionality, is owned by Discoze and is protected by copyright, trademark, and other intellectual property laws. You acknowledge that Discoze retains all right, title, and interest in and to the Vedvaani App.

Use of the App:
You agree to use the Vedvaani App in compliance with all applicable laws, regulations, and third-party agreements. You shall not use the Vedvaani App to upload, transmit, or disseminate any objectionable content, including but not limited to content that is defamatory, abusive, harassing, threatening, obscene, or otherwise objectionable. Discoze reserves the right to remove any objectionable content and to suspend or terminate your access to the Vedvaani App if you violate this provision.

No Tolerance for Abusive Users:
Discoze has a zero-tolerance policy for abusive users. Any user found engaging in abusive behavior, including but not limited to harassment, bullying, or discrimination, will have their access to the Vedvaani App suspended or terminated immediately.

Disclaimer of Liability:
YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT YOUR USE OF THE VEDVAANI APP IS AT YOUR SOLE RISK. THE VEDVAANI APP IS PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, DISCOZE DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. DISCOZE DOES NOT WARRANT THAT THE VEDVAANI APP WILL MEET YOUR REQUIREMENTS OR THAT THE OPERATION OF THE VEDVAANI APP WILL BE UNINTERRUPTED OR ERROR-FREE.

Limitation of Liability:
TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL DISCOZE OR ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, REVENUE, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO YOUR USE OF THE VEDVAANI APP, EVEN IF DISCOZE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

Indemnification:
You agree to indemnify, defend, and hold harmless Discoze and its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your use of the Vedvaani App or any violation of this Agreement.

Termination:
Discoze may terminate this Agreement at any time without notice if you fail to comply with any term or condition of this Agreement. Upon termination, you must cease all use of the Vedvaani App and uninstall it from your device.

Governing Law:
This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction], without giving effect to any principles of conflicts of law.

Entire Agreement:
This Agreement constitutes the entire agreement between you and Discoze regarding the subject matter hereof and supersedes all prior or contemporaneous agreements, understandings, and communications, whether oral or written, between you and Discoze regarding such subject matter.

Changes to the Agreement:
Discoze reserves the right to modify or amend this Agreement at any time by providing notice to you or by posting the revised Agreement within the Vedvaani App. Your continued use of the Vedvaani App after any such changes shall constitute your consent to such changes.

By clicking "I Agree" or by installing, accessing, or using the Vedvaani App, you acknowledge that you have read, understood, and agree to be bound by this Agreement. If you do not agree to the terms and conditions of this Agreement, do not install, access, or use the Vedvaani App.

[End of Agreement]
                                </div>
                                </div>
                                </div>
                    """
                ),
        width='100%',
        padding='20%',
        padding_top='2em',
        padding_bottom='2em',
    )
