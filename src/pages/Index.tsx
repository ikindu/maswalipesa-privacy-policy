import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Globe, Mail } from "lucide-react";

/** Section anchors — sticky pills (desktop) and Jump to Section (mobile), aligned with terms.maswalipesa.com */
const POLICY_NAV_SECTIONS = [
  { id: "introduction", label: "Introduction" },
  { id: "interpretation", label: "Interpretation" },
  { id: "collecting-data", label: "Collecting data" },
  { id: "use-of-data", label: "Use of data" },
  { id: "retention", label: "Retention" },
  { id: "transfer", label: "Transfer" },
  { id: "disclosure", label: "Disclosure" },
  { id: "security", label: "Security" },
  { id: "children", label: "Children's privacy" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
] as const;

function PolicySectionNav() {
  const [open, setOpen] = useState(false);
  const pillClass =
    "shrink-0 rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-primary hover:text-primary-foreground";

  return (
    <nav className="sticky top-0 z-10 border-b border-border bg-muted">
      <div className="mx-auto hidden max-w-4xl overflow-x-auto px-4 py-4 md:block">
        <div className="flex gap-3 whitespace-nowrap">
          {POLICY_NAV_SECTIONS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={pillClass}>
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-3 md:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground"
          aria-expanded={open}
          aria-controls="policy-section-jump-menu"
        >
          <span>Jump to Section</span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
        {open ? (
          <div
            id="policy-section-jump-menu"
            className="mt-2 overflow-hidden rounded-lg border border-border bg-background shadow-lg"
          >
            {POLICY_NAV_SECTIONS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block border-b border-border px-4 py-3 text-sm text-foreground last:border-b-0 hover:bg-muted/80"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-background policy-page">
      <header className="border-b border-white/10 bg-[#03232b] text-white">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-[5px] bg-primary p-1 shadow-md sm:h-20 sm:w-20 sm:p-1.5">
              <img
                src="/maswalipesa-logo.png"
                alt="MASWALIPESA"
                width={80}
                height={80}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0 text-left">
              <p className="font-title text-3xl font-bold tracking-[0.06em] text-primary sm:text-4xl md:text-5xl">
                MASWALIPESA
              </p>
              <p className="mt-2 text-base font-bold leading-snug tracking-wide text-white sm:text-lg md:text-xl">
                EARN WITH KNOWLEDGE
              </p>
            </div>
          </div>

          <h1 className="font-title mt-8 text-2xl font-bold tracking-wide text-white sm:text-3xl md:text-4xl">
            PRIVACY POLICY
          </h1>
          <p className="mt-2 text-sm text-white/75">Last updated: July 26, 2025</p>
        </div>
      </header>

      <PolicySectionNav />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <Card>
          <CardContent className="p-8 space-y-8">
            <section id="introduction" className="scroll-mt-24 space-y-4">
              <p className="text-foreground leading-relaxed">
                This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>
              <p className="text-foreground leading-relaxed">
                We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
              <p className="text-foreground leading-relaxed">
                This Privacy Policy should be read together with Our Terms and Conditions for MASWALIPESA. Where both documents apply, they are intended to be consistent; if You have questions about how they fit together, please contact Us using the details at the end of this Policy.
              </p>
            </section>

            <section id="interpretation" className="scroll-mt-24 space-y-6">
              <h2 className="border-b border-primary/25 pb-2 text-2xl font-semibold text-foreground">
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

                    <p className="text-foreground"><strong>Application</strong> means the <span className="font-semibold text-primary">MASWALIPESA</span> mobile or other software provided by the Company that You may download or access on an electronic device, as part of the Service.</p>

                    <p className="text-foreground"><strong>Country</strong> refers to Tanzania.</p>

                    <p className="text-foreground"><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone, or a digital tablet.</p>

                    <p className="text-foreground"><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to <span className="font-semibold text-primary">IKINDU TECHNOLOGIES CO. LTD</span>, Dar es Salaam, Tanzania.</p>

                    <p className="text-foreground"><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>

                    <p className="text-foreground"><strong>Service</strong> means the MASWALIPESA platform, including its website, mobile applications, game interfaces, wallets, payment features, jackpot features, and all related services offered by the Company (collectively, the same scope as the "Platform" described in Our Terms and Conditions).</p>

                    <p className="text-foreground"><strong>Service Provider</strong> means any natural or legal person who processes data on behalf of the Company. This includes third parties that facilitate the Service, provide services on Our behalf, support analytics, hosting, communications, identity or payment verification, compliance, or fraud prevention. Payment services on the Platform are integrated with <strong>Selcom PayTech</strong> (or any successor or substitute payment processor We may designate), which may process payment-related Personal Data in accordance with its role and applicable law.</p>

                    <p className="text-foreground"><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>

                    <p className="text-foreground"><strong>You</strong> mean the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="collecting-data" className="scroll-mt-24 space-y-6">
              <h2 className="border-b border-primary/25 pb-2 text-2xl font-semibold text-foreground">
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
                    Usage Data is collected automatically when using the Service.
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

            <section id="use-of-data" className="scroll-mt-24 space-y-6">
              <h2 className="border-b border-primary/25 pb-2 text-2xl font-semibold text-foreground">
                Use of Your Personal Data
              </h2>

              <p className="text-foreground leading-relaxed">
                The Company may use Personal Data for the following purposes:
              </p>

              <ul className="list-disc list-inside pl-4 space-y-3 text-foreground">
                <li><strong>To provide and maintain our Service</strong>, including monitoring the usage of our Service.</li>
                <li><strong>To manage Your Account</strong>: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                <li><strong>For account administration, payments, and compliance</strong>: to operate wallets and balances, process deposits and withdrawals through Our payment integrations (including where a payment processor such as Selcom PayTech handles transaction data), perform identity, phone, or payment verification, meet regulatory, tax, and licensing obligations, and prevent fraud.</li>
                <li><strong>To contact You</strong>: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products, or contracted services, including security updates, when necessary or reasonable for their implementation.</li>
                <li><strong>To manage Your requests</strong>: To attend and manage Your requests to Us, including support and complaints.</li>
                <li><strong>For product improvement and lawful business purposes</strong>: We may use Your information for data analysis, identifying usage trends, determining the effectiveness of Our promotional campaigns, and evaluating and improving Our Service, products, services, marketing, and Your experience, in line with applicable law.</li>
              </ul>
            </section>

            <section id="retention" className="scroll-mt-24 space-y-4">
              <h2 className="border-b border-primary/25 pb-2 text-2xl font-semibold text-foreground">
                Retention of Your Personal Data
              </h2>

              <p className="text-foreground leading-relaxed">
                The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
              </p>

              <p className="text-foreground leading-relaxed">
                The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
              </p>
            </section>

            <section id="transfer" className="scroll-mt-24 space-y-4">
              <h2 className="border-b border-primary/25 pb-2 text-2xl font-semibold text-foreground">
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

            <section id="disclosure" className="scroll-mt-24 space-y-6">
              <h2 className="border-b border-primary/25 pb-2 text-2xl font-semibold text-foreground">
                Disclosure of Your Personal Data
              </h2>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">Business Transactions</h3>
                <p className="text-foreground leading-relaxed">
                  If the Company is involved in a merger, acquisition, or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground">Law enforcement, regulators, and payment partners</h3>
                <p className="text-foreground leading-relaxed">
                  Under certain circumstances, the Company may be required or permitted to disclose Your Personal Data if required to do so by law, court order, regulator direction, or in response to valid requests by public authorities (for example, a court or government agency). We may also disclose Personal Data where necessary to meet payment provider or Mobile Money operator requirements, fraud prevention processes, or other lawful business needs consistent with Our Terms and Conditions.
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

            <section id="security" className="scroll-mt-24 space-y-4">
              <h2 className="border-b border-primary/25 pb-2 text-2xl font-semibold text-foreground">
                Security of Your Personal Data
              </h2>

              <p className="text-foreground leading-relaxed">
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section id="children" className="scroll-mt-24 space-y-4">
              <h2 className="border-b border-primary/25 pb-2 text-2xl font-semibold text-foreground">
                Children's Privacy
              </h2>

              <p className="text-foreground leading-relaxed">
                Our Service does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18. If You are a parent or guardian and You are aware that Your child has provided us with Personal Data, please contact us. If We become aware that We have collected Personal Data from anyone under the age of 18 without verification of parental consent, we take steps to remove that information from Our servers.
              </p>

              <p className="text-foreground leading-relaxed">
                If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, we may require Your parent's consent before We collect and use that information.
              </p>
            </section>

            <section id="changes" className="scroll-mt-24 space-y-4">
              <h2 className="border-b border-primary/25 pb-2 text-2xl font-semibold text-foreground">
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

            <section id="contact" className="scroll-mt-24 space-y-4">
              <h2 className="border-b border-primary/25 pb-2 text-2xl font-semibold text-foreground">
                Contact us
              </h2>

              <p className="text-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, you can contact us:
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>
                    By email:{" "}
                    <a href="mailto:info@ikindutechnologies.com" className="text-accent hover:underline">
                      info@ikindutechnologies.com
                    </a>
                  </span>
                </div>

                <div className="flex items-center gap-3 text-foreground">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>
                    Website:{" "}
                    <a
                      href="https://web.maswalipesa.com/"
                      className="text-accent hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      web.maswalipesa.com
                    </a>
                  </span>
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>

      <footer className="border-t border-white/10 bg-[#03232b] py-10 text-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[5px] bg-primary p-0.5">
              <img
                src="/maswalipesa-logo.png"
                alt="MASWALIPESA"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-title text-xl text-primary">MASWALIPESA</span>
          </div>
          <p className="mb-2 text-sm opacity-60">
            © 2022 - 2026 IKINDU TECHNOLOGIES CO. LTD. All rights reserved.
          </p>
          <p className="text-sm opacity-60">
            Operator Licence: OVG000000001 — Gaming Board of Tanzania
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
