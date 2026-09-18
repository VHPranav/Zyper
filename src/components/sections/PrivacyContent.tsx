"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

const sections = [
  {
    id: "who-we-are",
    number: "1.",
    title: "WHO WE ARE",
    content: [
      "ZYPER VENTURES is a diversified business group operating from Bengaluru, Karnataka.",
      "Our land and real estate division works with corporate clients on land acquisition and land takeover, including the identification, aggregation and transfer of parcels for industrial, warehousing, manufacturing and commercial use. Our construction division delivers structural and civil work on those sites and on independent mandates. Our beverages division operates as a licensed distributor of wine, spirits and beer.",
      "For the purposes of this policy, ZYPER VENTURES is the organisation responsible for deciding how your information is handled. Any reference to we, us or our means ZYPER VENTURES and its divisions.",
      "Registered entity name and registered office address are listed at the end of this page.",
    ],
  },
  {
    id: "what-we-collect",
    number: "2.",
    title: "WHAT WE COLLECT",
    subsections: [
      {
        title: "2.1 Information you give us directly",
        content: [
          "Most of what we hold is information you have chosen to share.",
          "If you approach us as a corporate client, this usually includes your name, designation, company name, official email address and phone number, along with the details of your requirement. A land mandate might include the size of parcel you need, preferred corridors or industrial belts, intended end use, zoning requirements, power and water load expectations, connectivity needs, investment range and timeline. A construction mandate might include site location, survey details, built up area, scope of work and drawings you share with us.",
          "If you approach us as a landowner, seller or agent, this usually includes your name, contact details, ownership particulars and the documentation relating to the parcel in question.",
          "If you approach us as a retail or hospitality partner in the beverages division, this usually includes your business name, outlet location and excise licence details.",
        ],
      },
      {
        title: "2.2 Documentation collected during a transaction",
        content: [
          "Land transactions in Karnataka require verification, and verification requires documents. Once a conversation moves toward an actual acquisition, mandate or supply relationship, we may collect and review title deeds, mother deeds, encumbrance certificates, khata and mutation records, survey and RTC extracts, conversion orders, land use approvals, tax receipts, identity and address proof, PAN, and where a company is involved, incorporation details, board resolutions and authorisations.",
          "Where a power of attorney, succession record or family settlement forms part of the chain of title, we will hold the personal details of the individuals named in those documents. This is unavoidable in land due diligence, and we treat that information with the same care as our own client records.",
          "Banking details are collected where payments, consideration transfers or statutory filings require them.",
        ],
      },
      {
        title: "2.3 Information collected automatically",
        content: [
          "Like most websites, ours records some technical information when you visit. This includes your IP address, browser and device type, the pages you viewed, how long you stayed and which site or search brought you here. This information helps us understand which parts of the site are useful and which are not.",
        ],
      },
      {
        title: "2.4 Information from other sources",
        content: [
          "Occasionally we receive your details from someone other than you. This happens when a channel partner, broker or consultant refers you, when we are given details of a landowner as part of an aggregation exercise, when we access public revenue and registration records during title verification, when you respond to a listing or industrial land enquiry, or when you interact with one of our social media pages.",
          "Public land records in Karnataka are exactly that, public. When we access them we do so for legitimate due diligence and not for any unrelated purpose.",
        ],
      },
    ],
  },
  {
    id: "why-we-collect",
    number: "3.",
    title: "WHY WE COLLECT IT",
    content: [
      "We collect information for reasons that are directly tied to the work in front of us.",
      "We use it to understand and respond to your requirement and to shortlist parcels or scopes that genuinely fit it. We use it to conduct title verification, chain of title examination and legal due diligence. We use it to prepare feasibility assessments, term sheets, quotations and agreements. We use it to liaise with revenue authorities, sub registrar offices, town planning departments and industrial development bodies on your behalf where you have appointed us to do so. We use it to coordinate surveys, valuations, approvals and conversions. We use it to manage construction execution, site access, vendor coordination and statutory filings. We use it to fulfil orders and meet the record keeping obligations that come with an excise licence. We use it to process payments and maintain accounts. We use it to send occasional updates about new mandates, available parcels or offerings, but only where you have agreed to receive them.",
      "We do not use your information to build profiles for sale, and we do not use it for purposes you would find surprising or unrelated to why you came to us.",
    ],
  },
  {
    id: "consent",
    number: "4.",
    title: "YOUR CONSENT",
    content: [
      "We rely on your consent when you submit a form, request a call back or subscribe to updates. Where we are required to collect and retain information under Indian law, such as registration records, excise records, tax records or land transaction documentation, we do so on that legal basis rather than on consent alone.",
      "You can withdraw your consent at any time by writing to us at the address given at the end of this page. Withdrawing consent stops future use of your information for marketing and similar purposes. It does not affect anything we were legally required to record before that point, and it does not undo documentation already filed with a public authority.",
    ],
  },
  {
    id: "cookies",
    number: "5.",
    title: "COOKIES AND WEBSITE ANALYTICS",
    content: [
      "Our website uses cookies. These are small files placed on your device that let the site remember basic things, such as whether you have visited before, and that allow us to measure traffic patterns.",
      "Some cookies are necessary for the site to function. Others are analytical and help us see which pages people actually read. If we run advertising campaigns, some cookies may also help measure whether those campaigns worked.",
      "You can block or delete cookies through your browser settings at any time. Some parts of the site may not work as intended if you do.",
    ],
  },
  {
    id: "sharing",
    number: "6.",
    title: "WHO WE SHARE INFORMATION WITH",
    content: [
      "We do not sell your personal information. We do not rent it, trade it or hand it to unrelated businesses for their own marketing.",
      "There are situations where sharing is necessary, and in land work there are several.",
      "We share information across ZYPER VENTURES divisions where a mandate involves more than one of them, for example an acquisition that moves into construction. We share it with the professionals engaged on a transaction, including title lawyers, licensed surveyors, valuers, architects, structural consultants and chartered accountants. We share it with revenue departments, sub registrar offices, town planning authorities, pollution control boards and industrial development bodies where a filing, approval, conversion or registration requires it. We share it with banks and financial institutions where funding, escrow or consideration transfer is involved. We share it with service providers who work on our behalf, such as hosting providers, customer relationship platforms, payment gateways and logistics partners, all of whom are expected to protect it and use it only for the work we have given them. We share it with courts, regulators or enforcement agencies where the law requires it.",
      "Corporate clients frequently ask that their identity stay confidential during an aggregation exercise, for obvious commercial reasons. Where we have agreed to that in writing, we will not disclose your identity to landowners or intermediaries except where a statutory filing makes it unavoidable.",
      "In the event of a restructuring or transfer of any part of our business, information may pass to the new entity under the same protections described here.",
    ],
  },
  {
    id: "protection",
    number: "7.",
    title: "HOW WE PROTECT IT",
    content: [
      "We use reasonable technical and organisational measures to keep your information safe. This includes secured servers, restricted internal access on a need to know basis, encrypted transmission of sensitive data, controlled handling of physical documents and title records, and confidentiality expectations placed on employees, consultants and partners who handle them.",
      "No system connected to the internet is completely secure, and we will not claim otherwise. What we can commit to is treating your information carefully, limiting who inside the organisation can see it, and acting quickly if something goes wrong.",
    ],
  },
  {
    id: "retention",
    number: "8.",
    title: "HOW LONG WE KEEP IT",
    content: [
      "Enquiry information is retained for as long as it takes to respond to you and for a reasonable period afterwards, in case you return to the conversation.",
      "Transactional, contractual and statutory records are retained for the periods that Indian tax, excise, property, registration and company law require. Land and title records in particular are retained for extended periods, because questions about a chain of title can surface many years after a transaction closes and the records are the only reliable answer. These periods vary and are not something we can shorten at request.",
      "When information is no longer needed for either purpose, it is deleted or anonymised.",
    ],
  },
  {
    id: "your-rights",
    number: "9.",
    title: "YOUR RIGHTS",
    content: [
      "You have the right to ask what personal information we hold about you and to receive a summary of it. You have the right to have inaccurate details corrected. You have the right to ask us to delete information we are not legally obliged to retain. You have the right to withdraw consent for marketing communication. And you have the right to raise a grievance if you believe your information has been mishandled.",
      "These rights apply whether you came to us as a corporate client, a landowner, a partner or a visitor.",
      "To exercise any of these, write to us using the contact details below. We will respond within a reasonable time and may ask you to verify your identity first, so that we are not handing your details to someone else.",
    ],
  },
  {
    id: "marketing",
    number: "10.",
    title: "MARKETING COMMUNICATION",
    content: [
      "If you have agreed to hear from us, we may occasionally send updates about available parcels, new mandates, project progress or offerings by email, phone, SMS or messaging apps.",
      "Every marketing email carries a way to unsubscribe. You can also ask us to stop by replying to any message or writing to the address below. Once you opt out, we will still contact you where necessary about an active transaction, a mandate, a delivery or a legal obligation, because that is service communication rather than marketing.",
    ],
  },
  {
    id: "beverages-age",
    number: "11.",
    title: "AGE RESTRICTION AND THE BEVERAGES DIVISION",
    content: [
      "Our beverages division operates as a licensed distributor of wine, spirits and beer. We do not sell alcohol directly to consumers through this website, and no part of this site facilitates an online liquor purchase.",
      "Content relating to alcohol on this site is intended only for individuals who have reached the legal drinking age in Karnataka. By viewing those pages you confirm that you meet that requirement. We ask that you do not share that content with anyone who does not.",
      "All beverages operations are conducted under valid licences issued by the Karnataka State Excise Department and are subject to its record keeping and compliance requirements.",
    ],
  },
  {
    id: "children",
    number: "12.",
    title: "INFORMATION RELATING TO CHILDREN",
    content: [
      "Our website and services are meant for adults. We do not knowingly collect personal information from anyone below the age of eighteen.",
      "Where a minor appears as a party in a chain of title, through inheritance or guardianship, we hold only what the transaction documentation requires and nothing further.",
      "If you believe a minor has submitted information to us through this website, write to us and we will remove it.",
    ],
  },
  {
    id: "external-links",
    number: "13.",
    title: "LINKS TO OTHER WEBSITES",
    content: [
      "This site may link to land record portals, government departments, partner websites, mapping services or social media platforms. Once you leave zyper.co.in, you are on someone else's terms.",
      "We do not control how those sites collect or use information, and this policy does not extend to them. We would encourage you to read their policies before sharing anything.",
    ],
  },
  {
    id: "changes",
    number: "14.",
    title: "CHANGES TO THIS POLICY",
    content: [
      "We may revise this policy as our operations, technology or legal obligations change. When we do, the revised version will be posted on this page with an updated date at the top.",
      "If a change materially affects how we handle your information, we will make a reasonable effort to tell you directly.",
    ],
  },
  {
    id: "contact",
    number: "15.",
    title: "HOW TO REACH US",
    content: [
      "If you have a question about this policy, want a copy of what we hold, or wish to raise a concern about how your information has been used, contact us.",
    ],
    contactBlock: true,
  },
];

export default function PrivacyContent() {
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
            Privacy Policy
          </h1>
        </Reveal>

        {/* Intro */}
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
              When you approach us with a land requirement, a construction mandate or a distribution enquiry, you share information with us. Often a great deal of it, and often about parties other than yourself. This policy explains what we collect, why we need it, how long we keep it and what you can ask us to do with it.
            </p>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
                lineHeight: "1.75",
                color: "rgba(17,17,17,0.55)",
              }}
            >
              We have written it in plain language on purpose. A privacy policy is only useful if the person it concerns can actually read it.
            </p>
          </div>
        </Reveal>

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(40px, 5vw, 60px)" }}>
          {sections.map((section, i) => (
            <Reveal key={section.id} delay={0.05 + i * 0.02}>
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
                      letterSpacing: "0.06em",
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
                  <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginTop: section.content ? "24px" : "0" }}>
                    {section.subsections.map((sub, k) => (
                      <div key={k}>
                        <h3
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 600,
                            fontSize: "clamp(0.9rem, 1.05vw, 1rem)",
                            color: "#111111",
                            marginBottom: "12px",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {sub.title}
                        </h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
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

                {/* Contact block for section 15 */}
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
                      { label: "Grievance Officer", value: "[NAME TO CONFIRM]" },
                      { label: "Email", value: "[OFFICIAL EMAIL TO CONFIRM]" },
                      { label: "Phone", value: "[NUMBER TO CONFIRM]" },
                      { label: "Registered Office", value: "ZYPER VENTURES [FULL REGISTERED ADDRESS TO CONFIRM] Bengaluru, Karnataka, India" },
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
                            color: "rgba(17,17,17,0.65)",
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
              marginTop: "clamp(40px, 5vw, 64px)",
              paddingTop: "clamp(24px, 3vw, 36px)",
              borderTop: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "13px",
                lineHeight: "1.7",
                color: "rgba(17,17,17,0.45)",
              }}
            >
              We aim to acknowledge every request within a reasonable period and resolve it as quickly as we can.
              This policy is governed by the laws of India. Any dispute arising from it falls under the jurisdiction of the courts at Bengaluru, Karnataka.
            </p>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "13px",
                lineHeight: "1.7",
                color: "rgba(17,17,17,0.35)",
                marginTop: "12px",
              }}
            >
              Questions? Visit our{" "}
              <Link
                href="/contact"
                style={{ color: "rgba(17,17,17,0.55)", textDecoration: "underline" }}
              >
                contact page
              </Link>
              .
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
