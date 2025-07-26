import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground">MASWALIPESA Application</p>
            <p className="text-sm text-muted-foreground mt-1">Last updated: July 26, 2025</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-8 space-y-8">
            {/* Introduction */}
            <section className="space-y-4">
              <p className="text-foreground leading-relaxed">
                This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>
              <p className="text-foreground leading-relaxed">
                We use Your Personal data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </section>

            {/* Interpretation and Definitions */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                Interpretation and Definitions
              </h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">Interpretation</h3>
                <p className="text-foreground leading-relaxed">
                  The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in the plural.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">Definitions</h3>
                <p className="text-foreground leading-relaxed mb-4">
                  For the purposes of this Privacy Policy:
                </p>
                
                <div className="space-y-4 pl-4">
                  <div className="space-y-2">
                    <p className="text-foreground"><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>
                    
                    <p className="text-foreground"><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest, or other securities entitled to vote for election of directors or other managing authority.</p>
                    
                    <p className="text-foreground"><strong>Application</strong> means the software program provided by the Company downloaded by You on any electronic device, named <span className="text-accent font-semibold">MASWALIPESA</span></p>
                    
                    <p className="text-foreground"><strong>Country</strong> refers to Tanzania.</p>
                    
                    <p className="text-foreground"><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone, or a digital tablet.</p>
                    
                    <p className="text-foreground"><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to <span className="text-accent font-semibold">IKINDU TECHNOLOGIES COMPANY LIMITED</span>, Dar es salaam, Tanzania.</p>
                    
                    <p className="text-foreground"><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>
                    
                    <p className="text-foreground"><strong>Service</strong> refers to the Application.</p>
                    
                    <p className="text-foreground"><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service, or to assist the Company in analyzing how the Service is used.</p>
                    
                    <p className="text-foreground"><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
                    
                    <p className="text-foreground"><strong>You</strong> mean the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Collecting and Using Your Personal Data */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                Collecting and Using Your Personal Data
              </h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">Types of Data Collected</h3>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-foreground">Personal Data</h4>
                  <p className="text-foreground leading-relaxed">
                    While using Our Service, we may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                  </p>
                  <ul className="list-disc list-inside pl-4 space-y-2 text-foreground">
                    <li>Email address</li>
                    <li>First name, Middle and Last name</li>
                    <li>Phone number</li>
                    <li>Gender</li>
                    <li>Date of birth</li>
                    <li>Usage Data</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-foreground">Usage Data</h4>
                  <p className="text-foreground leading-relaxed">
                    Usage Data has collected automatically when using the Service.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Usage Data may include information such as Your Device's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                  </p>
                </div>

              </div>
            </section>

            {/* Use of Your Personal Data */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                Use of Your Personal Data
              </h2>
              
              <p className="text-foreground leading-relaxed">
                The Company may use Personal Data for the following purposes:
              </p>
              
              <ul className="list-disc list-inside pl-4 space-y-3 text-foreground">
                <li><strong>To provide and maintain our Service</strong>, including monitoring the usage of our Service.</li>
                <li><strong>To manage Your Account</strong>: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                <li><strong>To contact You</strong>: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products, or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
                <li><strong>To manage Your requests</strong>: To attend and manage Your requests to us.</li>
                <li><strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns, and evaluating and improve our Service, products, services, marketing, and your experience.</li>
              </ul>
            </section>

            {/* Retention of Your Personal Data */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                Retention of Your Personal Data
              </h2>
              
              <p className="text-foreground leading-relaxed">
                The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
              </p>
              
              <p className="text-foreground leading-relaxed">
                The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
              </p>
            </section>

            {/* Transfer of Your Personal Data */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                Transfer of Your Personal Data
              </h2>
              
              <p className="text-foreground leading-relaxed">
                Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to and maintained on computers located outside of Your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those from Your jurisdiction.
              </p>
              
              <p className="text-foreground leading-relaxed">
                Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
              </p>
              
              <p className="text-foreground leading-relaxed">
                The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
              </p>
            </section>

            {/* Disclosure of Your Personal Data */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                Disclosure of Your Personal Data
              </h2>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">Business Transactions</h3>
                <p className="text-foreground leading-relaxed">
                  If the Company is involved in a merger, acquisition, or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">Law enforcement</h3>
                <p className="text-foreground leading-relaxed">
                  Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">Other legal requirements</h3>
                <p className="text-foreground leading-relaxed">
                  The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
                </p>
                <ul className="list-disc list-inside pl-4 space-y-2 text-foreground">
                  <li>Comply with a legal obligation</li>
                  <li>Protect and defend the rights or property of the Company</li>
                  <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                  <li>Protect the personal safety of users of the Service or the public</li>
                  <li>Protect against legal liability</li>
                </ul>
              </div>
            </section>

            {/* Security of Your Personal Data */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                Security of Your Personal Data
              </h2>
              
              <p className="text-foreground leading-relaxed">
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                Children's Privacy
              </h2>
              
              <p className="text-foreground leading-relaxed">
                Our Service does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18. If You are a parent or guardian and You are aware that Your child has provided us with Personal Data, please contact us. If We become aware that We have collected Personal Data from anyone under the age of 18 without verification of parental consent, we take steps to remove that information from Our servers.
              </p>
              
              <p className="text-foreground leading-relaxed">
                If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, we may require Your parent's consent before We collect and use that information.
              </p>
            </section>

            {/* Changes to this Privacy Policy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                Changes to this Privacy Policy
              </h2>
              
              <p className="text-foreground leading-relaxed">
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
              </p>
              
              <p className="text-foreground leading-relaxed">
                We will let You know via email and/or a prominent notice on our service, prior to the change becoming effective and update the "Last Updated" date at the top of this Privacy Policy.
              </p>
              
              <p className="text-foreground leading-relaxed">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>

            {/* Contact us */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
                Contact us
              </h2>
              
              <p className="text-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, you can contact us:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-foreground">
                  <Mail className="h-5 w-5 text-accent" />
                  <span>By email: <a href="mailto:info@ikindutechnologies.co.tz" className="text-accent hover:underline">info@ikindutechnologies.co.tz</a></span>
                </div>
                
                <div className="flex items-center gap-3 text-foreground">
                  <Globe className="h-5 w-5 text-accent" />
                  <span>By visiting this page on our website: <a href="http://www.privacy.policy.maswalipesa.com" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">www.privacy.policy.maswalipesa.com</a></span>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;