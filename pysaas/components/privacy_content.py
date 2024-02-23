import reflex as rx


def privacy_content() -> rx.Component:
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
                <div>
                        <strong>
                                <span style="font-size: 26px;">
                                        <span data-custom-class="title">
                                                <bdt class="block-component"></bdt>
                                                <bdt class="question">PRIVACY POLICY</bdt>
                                                <bdt class="statement-end-if-in-editor"></bdt>
                                        </span>
                                </span>
                        </strong>
                
                </div>  
                <div>              
                


                        <p>Last Updated: 22 Feb 2024</p>

                        <p>Discoze is committed to protecting the privacy of its users. This Privacy Policy outlines how Discoze collects, uses, discloses, and manages your information when you use our chat app, Vedvaani. By using Vedvaani, you consent to the practices outlined in this Privacy Policy.</p>

                        <h2>Information We Collect</h2>

                        <ol>
                        <li><strong>Information You Provide:</strong> When you register an account with Vedvaani, we may collect personal information such as your name, email address, and any other information you choose to provide.</li>
                        <li><strong>Chat Data:</strong> We collect and store the content of your chats, including messages exchanged between you and AI characters, for the purpose of improving our services and enhancing your user experience.</li>
                        <li><strong>Usage Information:</strong> We may collect information about how you use Vedvaani, such as your interactions with the app, frequency of use, and the features you use most often. This information helps us analyze trends and improve our services.</li>
                        <li><strong>Device Information:</strong> We may collect information about the device you use to access Vedvaani, such as device type, operating system, unique device identifiers, and IP address. This information helps us troubleshoot technical issues and optimize our app for different devices.</li>
                        </ol>

                        <h2>How We Use Your Information</h2>

                        <ol>
                        <li><strong>To Provide and Improve Services:</strong> We use the information collected to provide you with Vedvaani's services, including personalized AI chat experiences, and to continually improve our app based on user feedback and usage patterns.</li>
                        <li><strong>To Communicate with You:</strong> We may use your contact information to send you important updates, announcements, and notifications related to your use of Vedvaani, as well as respond to your inquiries and support requests.</li>
                        <li><strong>For Research and Analytics:</strong> We may use aggregated and anonymized data for research and analytical purposes, such as understanding user demographics and preferences, and identifying trends to improve Vedvaani's features and functionality.</li>
                        </ol>

                        <h2>Disclosure of Your Information</h2>

                        <p>We may disclose your information in the following circumstances:</p>

                        <ol>
                        <li><strong>With Your Consent:</strong> We may share your information with third parties if you have given us consent to do so.</li>
                        <li><strong>Service Providers:</strong> We may engage third-party service providers to assist us in providing and maintaining Vedvaani. These service providers have access to your information only to perform tasks on our behalf and are obligated not to disclose or use it for any other purpose.</li>
                        <li><strong>Legal Compliance:</strong> We may disclose your information if required to do so by law or in response to valid legal requests, such as subpoenas or court orders.</li>
                        </ol>

                        <h2>Security</h2>

                        <p>Discoze takes the security of your information seriously and implements appropriate technical and organizational measures to protect it against unauthorized access, disclosure, alteration, or destruction.</p>

                        <h2>Changes to this Privacy Policy</h2>

                        <p>We reserve the right to update or revise this Privacy Policy at any time. We will notify you of any changes by posting the new Privacy Policy on this page. Your continued use of Vedvaani after any modifications to this Privacy Policy will constitute your acknowledgment of the modifications and your consent to abide and be bound by the updated Privacy Policy.</p>

                        <h2>Contact Us</h2>

                        <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at <a href="mailto:rushabh@discoze.com">rushabh@discoze.com</a>.</p>

                        <p>By using Vedvaani, you signify your acceptance of this Privacy Policy. If you do not agree to this Privacy Policy, please do not use Vedvaani.</p>


                
                </div>
                </div>
               
            """
        ),
        width='100%',
        padding='20%',
        padding_top='2em',
        padding_bottom='2em',
    )
