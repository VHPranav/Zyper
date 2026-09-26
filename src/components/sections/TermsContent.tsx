"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

interface Section {
  id: string;
  number: string;
  title: string;
  content?: string[];
  subsections?: { title: string; content: string[] }[];
  contactBlock?: boolean;
}

const sections: Section[] = [
  {
    id: "who-we-are",
    number: "1.",
    title: "Who We Are",
    content: [
      "Zyper Ventures is a diversified business group based in Bengaluru, Karnataka, operating across three divisions. Our real estate division develops and offers residential and commercial property. Our construction division delivers building and contracting work. Our beverages division operates as a licensed distributor of wine, spirits and beer across Bengaluru and Karnataka.",
      "References in these terms to Zyper Ventures, we, us and our mean Zyper Ventures, with registered office at Ground Floor 7th Cross, 27th Main Rd, HSR Layout, Bengaluru, Karnataka 560102. References to you and your mean the person accessing or using this website.",
    ],
  },
  {
    id: "changes",
    number: "2.",
    title: "Changes to These Terms",
    content: [
      "We may revise these terms from time to time. Changes may be needed to reflect changes in law, in regulation, in how our divisions operate or in how the website itself works. When we make a change, we will update the date shown at the top of this page. The version published here at the time you use the website is the version that applies to you.",
      "We would encourage you to look at this page occasionally so that you are aware of any updates. Continuing to use the website after a change has been published means you accept the revised terms.",
    ],
  },
  {
    id: "purpose",
    number: "3.",
    title: "Purpose of This Website",
    content: [
      "This website exists to introduce Zyper Ventures and to describe the work of our three divisions. It is an informational and communication platform. It is not a transactional platform. You cannot buy property, commission construction work or purchase beverages through this website, and no page on this website constitutes an offer capable of acceptance.",
      "Anything you read here, including descriptions of projects, services, specifications, capabilities and locations, is provided to help you understand what we do and to help you decide whether to contact us. It is an invitation to begin a conversation, nothing more. Any actual commitment between you and Zyper Ventures will be recorded in a separate written agreement executed by both parties.",
    ],
  },
  {
    id: "eligibility",
    number: "4.",
    title: "Eligibility to Use This Website",
    content: [
      "You may use this website only if you are at least 18 years of age and legally capable of entering into a binding contract under the Indian Contract Act, 1872. If you are accessing the website on behalf of a company, firm or other organisation, you confirm that you are authorised to do so and to accept these terms on its behalf.",
      "Access to the sections of this website relating to our beverages division carries an additional age requirement, which is set out in clause 7 below.",
    ],
  },
  {
    id: "real-estate",
    number: "5.",
    title: "Information About Our Real Estate Division",
    content: [
      "We take care to describe our property offerings accurately, and at the same time property development is a long process in which many details are settled progressively. The following applies to everything published on this website in relation to real estate.",
    ],
    subsections: [
      {
        title: "5.1 Nature of the information",
        content: [
          "Descriptions of projects, plots, villas, apartments and commercial spaces are indicative. Layouts, plans, elevations, dimensions, carpet area, built up area, specifications, amenities, materials, finishes and completion timelines are subject to change, whether by our own design decisions or by the requirements of the sanctioning and approving authorities.",
        ],
      },
      {
        title: "5.2 Images and visual material",
        content: [
          "Photographs, renders, walkthroughs, floor plans and location maps shown on this website are artistic impressions and creative representations produced for illustration. They are not to scale, they are not photographs of a finished product unless expressly labelled as such, and they should not be relied upon as an accurate depiction of any completed or proposed development.",
        ],
      },
      {
        title: "5.3 Pricing",
        content: [
          "Any price, rate, payment schedule or offer mentioned on this website is indicative and subject to change without notice. Prices exclude statutory charges, taxes, registration fees, stamp duty, maintenance deposits and other levies unless we have stated otherwise in writing. A binding price is only one that has been confirmed to you in writing by an authorised representative of Zyper Ventures.",
        ],
      },
      {
        title: "5.4 Regulatory registration",
        content: [
          "Our projects are registered with the Karnataka Real Estate Regulatory Authority where registration is required under the Real Estate (Regulation and Development) Act, 2016. Registration details for each project are available on the relevant project page and on the authority's official portal. We would encourage every prospective purchaser to verify registration details independently before making any commitment.",
        ],
      },
      {
        title: "5.5 Independent verification",
        content: [
          "Property is a significant decision and we would rather you make it with your own eyes open. Before entering into any transaction with us, please satisfy yourself independently as to title, approvals, sanctions, regulatory registration, physical condition of the site and the terms of the documentation. Nothing on this website should be treated as a substitute for professional legal, financial or tax advice.",
        ],
      },
    ],
  },
  {
    id: "construction",
    number: "6.",
    title: "Information About Our Construction Division",
    content: [
      "Descriptions of our construction services, methods, timelines, materials and past work are provided to explain our approach and our capability. They are not a fixed specification and they are not a quotation.",
      "Any estimate, budget figure, duration or scope indicated on this website is illustrative. Every construction project is shaped by its own site conditions, soil profile, approvals, design decisions, material availability and client requirements. A firm scope and a firm price can only follow a site survey and a detailed discussion, and will be recorded in a written contract.",
      "Warranties, guarantees and defect liability periods, where offered, are governed entirely by the terms of the signed construction contract and not by anything stated on this website.",
    ],
  },
  {
    id: "beverages",
    number: "7.",
    title: "Information About Our Beverages Division",
    content: [
      "Our beverages division operates as a licensed distributor under licences issued by the Excise Department, Government of Karnataka. The content published on this website in relation to that division is subject to the following, which we would ask you to read particularly carefully.",
    ],
    subsections: [
      {
        title: "7.1 Age restriction",
        content: [
          "The beverages sections of this website are intended solely for persons who have attained the legal drinking age applicable in the State of Karnataka, which is 21 years. If you have not attained that age, please do not access, browse or engage with those sections of the website.",
        ],
      },
      {
        title: "7.2 No sale, order or delivery through this website",
        content: [
          "We do not sell, offer for sale, accept orders for or deliver alcoholic beverages through this website or through any digital channel. No page in the beverages section constitutes an offer to sell alcohol to any person. All supply is carried out offline, through licensed channels, to licensed counterparties, in accordance with the Karnataka Excise Act, 1965 and the rules made under it.",
        ],
      },
      {
        title: "7.3 Nature of the content",
        content: [
          "Content in the beverages section describes our distribution operations, our logistics capability and the categories we handle. It is directed at trade counterparties, licensed retailers, hospitality partners and brand principals. It is informational rather than promotional and it is not intended to encourage or induce the consumption of alcohol by any person.",
        ],
      },
      {
        title: "7.4 Responsible consumption",
        content: [
          "We support the responsible consumption of alcohol. Consumption of alcohol is injurious to health. Please do not drink and drive.",
        ],
      },
      {
        title: "7.5 Brand names and third party products",
        content: [
          "Brand names, product names, labels and logos belonging to the beverage brands we distribute remain the property of their respective owners. Their appearance on this website reflects a distribution relationship and does not imply ownership by Zyper Ventures, nor does it imply any endorsement of Zyper Ventures by those owners beyond the terms of the relevant distribution arrangement.",
        ],
      },
    ],
  },
  {
    id: "accuracy",
    number: "8.",
    title: "Accuracy of Information",
    content: [
      "We make a genuine effort to keep this website accurate and current. Even so, information can go out of date, errors can occur and pages can be affected by technical faults during updates.",
      "We therefore provide the content of this website on an as is basis and without warranty of any kind, whether express or implied. We do not warrant that the website will be uninterrupted, error free, secure or free of harmful components, nor that any defect will be corrected within a particular period. To the extent permitted by law, we exclude all implied warranties, conditions and representations relating to this website and its content.",
      "If you notice something on this website that appears inaccurate, we would be grateful if you would tell us using the contact details in clause 19, and we will look into it.",
    ],
  },
  {
    id: "ip",
    number: "9.",
    title: "Intellectual Property",
    content: [
      "All content on this website, including text, graphics, photographs, illustrations, renders, video, audio, layout, design, page structure and source code, belongs to Zyper Ventures or is used by us under licence. The Zyper Ventures name, logo and any associated marks are our property.",
      "You may view this website, and you may print or download extracts for your own personal and non commercial reference. Beyond that, you may not copy, reproduce, republish, distribute, transmit, adapt, translate, sell, licence, frame or create derivative works from any part of this website without our prior written permission.",
      "If you would like to use our material for a legitimate purpose such as press coverage, research or a partnership, please write to us. We are usually happy to help when we understand the context.",
    ],
  },
  {
    id: "acceptable-use",
    number: "10.",
    title: "How You May Use This Website",
    content: [
      "You agree to use this website lawfully and in a way that does not restrict or inhibit anyone else's use of it. In particular, you agree that you will not attempt to gain unauthorised access to any part of the website, any server on which it is stored or any system connected to it. You will not introduce any virus, malicious code or other harmful material. You will not use automated tools to scrape, harvest or extract data from the website. You will not use the website to transmit unlawful, defamatory, obscene, misleading or infringing material, and you will not misuse any contact form or communication channel on the website to send unsolicited commercial messages.",
      "We reserve the right to restrict or withdraw access to the website, in whole or in part, where we reasonably believe these terms have been breached. Where a breach involves conduct that appears unlawful, we may report it to the appropriate authorities.",
    ],
  },
  {
    id: "enquiries",
    number: "11.",
    title: "Enquiries and Information You Submit",
    content: [
      "When you complete a contact form, request a callback, subscribe to updates or otherwise send us information through this website, you confirm that the information you provide is true and that you are entitled to provide it.",
      "By submitting an enquiry, you agree that we may contact you by telephone, email, SMS or messaging application in response, including where your number is registered on a do not disturb or do not call list, for the purpose of responding to the enquiry you have raised. You may ask us to stop contacting you at any time and we will act on that request.",
      "How we collect, use and protect the information you give us is described in our Privacy Policy, which forms part of these terms and should be read alongside them.",
    ],
  },
  {
    id: "links",
    number: "12.",
    title: "Links to Other Websites",
    content: [
      "This website may contain links to websites operated by others, including brand principals, regulatory portals, partners and social media platforms. We provide those links for convenience. We do not control those websites, we do not review their content and we are not responsible for anything found on them or for any loss arising from your use of them. A link is not an endorsement. When you leave this website, the terms and privacy practices of the destination site will apply to you.",
    ],
  },
  {
    id: "liability",
    number: "13.",
    title: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, Zyper Ventures, its directors, employees, agents and representatives will not be liable for any loss or damage arising out of or in connection with your use of this website or your reliance on any information published on it. This includes direct loss, indirect loss, consequential loss, loss of profit, loss of opportunity, loss of business, loss of goodwill and loss or corruption of data, whether the claim is framed in contract, in tort, under statute or otherwise.",
      "Nothing in these terms limits or excludes any liability that cannot lawfully be limited or excluded, including liability for fraud or for anything else that applicable Indian law does not permit us to exclude.",
    ],
  },
  {
    id: "indemnity",
    number: "14.",
    title: "Indemnity",
    content: [
      "You agree to indemnify Zyper Ventures and to keep us indemnified against any claim, demand, loss, liability, cost or expense, including reasonable legal fees, arising from your breach of these terms, your misuse of this website or your violation of any law or of the rights of any third party in connection with your use of this website.",
    ],
  },
  {
    id: "force-majeure",
    number: "15.",
    title: "Force Majeure",
    content: [
      "We will not be considered in breach of these terms, and we will not be liable for any delay or failure in the operation of this website, where the cause lies beyond our reasonable control. This includes acts of God, natural disaster, fire, flood, epidemic, war, civil unrest, terrorism, strike, labour dispute, government action, change in law, failure of public infrastructure, power failure, failure of telecommunications networks and failure of internet services or hosting providers.",
    ],
  },
  {
    id: "governing-law",
    number: "16.",
    title: "Governing Law and Jurisdiction",
    content: [
      "These terms and any dispute or claim arising out of them or out of your use of this website are governed by the laws of India. The courts at Bengaluru, Karnataka will have exclusive jurisdiction over any such dispute or claim.",
    ],
  },
  {
    id: "severability",
    number: "17.",
    title: "Severability and Waiver",
    content: [
      "If any provision of these terms is found by a competent court to be invalid, unlawful or unenforceable, that provision will be severed and the remaining provisions will continue in full force. If we do not enforce a right under these terms on a particular occasion, that does not mean we have given up that right, and we may enforce it later.",
    ],
  },
  {
    id: "entire-understanding",
    number: "18.",
    title: "Entire Understanding",
    content: [
      "These terms, together with our Privacy Policy, set out the entire understanding between you and Zyper Ventures in relation to your use of this website, and they replace any earlier understanding on that subject.",
    ],
  },
  {
    id: "contact",
    number: "19.",
    title: "How to Reach Us",
    content: [
      "If you have a question about these terms, or about anything published on this website, we would be glad to hear from you.",
    ],
    contactBlock: true,
  },
];

export default function TermsContent() {
  return (
    <section
      style={{
        background: "#FAF7F2",
        minHeight: "100svh",
        paddingTop: "clamp(140px, 14vw, 180px)",
        paddingBottom: "clamp(120px, 14vw, 200px)",
        paddingInline: "clamp(24px, 5vw, 64px)",
      }}
    >
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>

        {/* Page Title */}
        <Reveal delay={0.05}>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
              letterSpacing: "-0.04em",
              lineHeight: "1.1",
              color: "#111111",
              marginBottom: "16px",
            }}
          >
            Terms and Conditions
          </h1>
        </Reveal>

        {/* Preamble */}
        <Reveal delay={0.1}>
          <div
            style={{
              borderBottom: "1px solid rgba(0,0,0,0.10)",
              paddingBottom: "clamp(40px, 5vw, 64px)",
              marginBottom: "clamp(40px, 5vw, 64px)",
            }}
          >
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
                lineHeight: "1.75",
                color: "rgba(17,17,17,0.75)",
                marginBottom: "20px",
              }}
            >
              Welcome to the Zyper Ventures website. These terms explain the basis on which you may use this website and the information published on it. Please read them carefully. By visiting this website, browsing any page, submitting an enquiry or otherwise interacting with the content here, you confirm that you have read these terms and that you agree to be bound by them. If you do not agree with any part of what follows, we would ask you not to use the website.
            </p>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
                lineHeight: "1.75",
                color: "rgba(17,17,17,0.55)",
              }}
            >
              These terms apply to the website only. They do not replace or override any separate agreement you may enter into with us, whether that is a sale agreement, a construction contract, a supply arrangement or any other signed document. Where a signed agreement exists between you and us, that agreement governs the relationship and these terms apply only to your use of the website.
            </p>
          </div>
        </Reveal>

        {/* All Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(40px, 5vw, 60px)" }}>
          {sections.map((section, i) => (
            <Reveal key={section.id} delay={0.04 + i * 0.015}>
              <div
                id={section.id}
                style={{
                  paddingBottom: "clamp(40px, 5vw, 60px)",
                  borderBottom: i < sections.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
                }}
              >
                {/* Section heading */}
                <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "20px" }}>
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#C28224",
                      letterSpacing: "0.1em",
                      flexShrink: 0,
                    }}
                  >
                    {section.number}
                  </span>
                  <h2
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(1rem, 1.25vw, 1.2rem)",
                      letterSpacing: "0.01em",
                      color: "#111111",
                      margin: 0,
                    }}
                  >
                    {section.title}
                  </h2>
                </div>

                {/* Top-level content paragraphs */}
                {section.content && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    {section.content.map((para, j) => (
                      <p
                        key={j}
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: "clamp(0.9rem, 1.05vw, 1rem)",
                          lineHeight: "1.8",
                          color: "rgba(17,17,17,0.70)",
                          margin: 0,
                        }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                )}

                {/* Subsections */}
                {section.subsections && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: section.content ? "24px" : "0" }}>
                    {section.subsections.map((sub, k) => (
                      <div key={k}>
                        <h3
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 600,
                            fontSize: "clamp(0.875rem, 1vw, 0.95rem)",
                            color: "#111111",
                            marginBottom: "10px",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {sub.title}
                        </h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                          {sub.content.map((para, l) => (
                            <p
                              key={l}
                              style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontSize: "clamp(0.9rem, 1.05vw, 1rem)",
                                lineHeight: "1.8",
                                color: "rgba(17,17,17,0.70)",
                                margin: 0,
                              }}
                            >
                              {para}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Contact block for section 19 */}
                {section.contactBlock && (
                  <div
                    style={{
                      marginTop: "24px",
                      background: "#EDE7DF",
                      borderRadius: "20px",
                      padding: "clamp(24px, 3vw, 36px)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    {[
                      { label: "Entity", value: "Zyper Ventures" },
                      { label: "Registered Office", value: "Ground Floor 7th Cross, 27th Main Rd, HSR Layout, Bengaluru, Karnataka 560102" },
                      { label: "Email", value: "zyperyard@gmail.com" },
                      { label: "Telephone", value: "9072727544" },
                    ].map((row) => (
                      <div key={row.label} style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                        <span
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 600,
                            fontSize: "13px",
                            color: "#111111",
                            minWidth: "160px",
                          }}
                        >
                          {row.label}
                        </span>
                        <span
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: "13px",
                            color: "rgba(17,17,17,0.60)",
                            lineHeight: "1.6",
                          }}
                        >
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>


        {/* Footer note */}
        <Reveal delay={0.1}>
          <div
            style={{
              marginTop: "clamp(32px, 4vw, 48px)",
              paddingTop: "clamp(24px, 3vw, 36px)",
              borderTop: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "13px",
                lineHeight: "1.7",
                color: "rgba(17,17,17,0.4)",
              }}
            >
              These terms are governed by the laws of India. Jurisdiction: courts at Bengaluru, Karnataka.{" "}
              <Link href="/privacy" style={{ color: "rgba(17,17,17,0.55)", textDecoration: "underline" }}>
                Privacy Policy
              </Link>{" "}
              ·{" "}
              <Link href="/contact" style={{ color: "rgba(17,17,17,0.55)", textDecoration: "underline" }}>
                Contact Us
              </Link>
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
