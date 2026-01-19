
import { Education, Publication, Experience, Affiliation, StrategicService } from './types';

export const BUSINESS_NAME = "Harmar Strategic Advisory";
export const SLOGAN = "INTEGRATED BUSINESS, LEGAL & TECHNICAL SOLUTIONS";
export const CONTACT_EMAIL = "harmartim@gmail.com";
export const CONTACT_PHONE = "705.999.3657";

export const BIO_PARAGRAPHS = [
  "Tim J. Harmar (CAPP) provides high-stakes strategic counsel at the convergence of legal advocacy, financial logic, and technical engineering. A Barrister & Solicitor who acted as counsel in the leading Supreme Court of Canada case on anti-SLAPP legislation, Tim's career is defined by navigating complex constitutional and commercial tensions at the highest level of national jurisdiction. His practice is built on the principle that modern organizational risk cannot be managed within silos; it requires a unified, integrated framework.",
  "His educational pedigree is engineered for the complexities of the global economy. Foundationally, Tim holds an Honours Bachelor of Arts in Political Science and Psychology and a Post-Graduate Diploma in Justice System Administration. This bedrock is reinforced by a Juris Doctor (JD) and dual Master of Laws (LLM) degrees specializing in Business Law and Banking & Financial Services, alongside an MBA in Finance. Recognizing the critical nature of digital infrastructure, he earned a Master of Engineering (M.Eng) in Cybersecurity Policy from George Washington University, bridging the gap between technical resilience and legal liability.",
  "Tim's deep regional roots in Northern Ontario provide a practical perspective on industrial and economic development. Having served as the Business Development Manager for the Sault Ste. Marie Innovation Centre and as an Environmental Consultant, he understands the ground-level realities of resource management and tech-sector growth. Today, he leverages this experience as a Professor in the Global Business Management program at Sault College and as a Director on several strategic Boards, providing oversight on governance and institutional ethics.",
  "Headquartered in Sault Ste. Marie, the firm serves as a strategic hub for organizations facing global mandates. By synthesizing technical engineering, financial modeling, and legal rigor into a single decision-making framework, Tim ensures that his clients are not only compliant but are competitively positioned for sustainable growth in volatile markets. His objective is the structural immunization of the enterprise against strategic risk."
];

export const SERVICES: StrategicService[] = [
  {
    title: "Strategic Growth & Governance",
    description: "Architecting sustainable expansion through financial rigor and institutional logic. We leverage MBA-level modeling to transform vision into execution-ready mandates.",
    icon: "fa-chess-knight",
    tags: ["MBA Strategy", "Corporate Growth", "Governance"],
    benefits: [
      "Optimizing operational efficiency during industrial transitions.",
      "Architecting regional economic development frameworks.",
      "Providing Board-level oversight for systemic risk mitigation."
    ],
    expansiveDetails: {
      philosophy: "Strategy is an engineered sequence of capital and operational discipline. For Northern Ontario, growth requires a dual-track focus on local industrial reality and global standards.",
      focusAreas: [
        "M&A Strategic Due Diligence",
        "Public Funding Procurement (FedNor, NOHFC, CIB)",
        "Board Advisory & Fiduciary Governance",
        "Industrial Transition & Asset Optimization"
      ],
      methodology: [
        "Financial modeling of growth trajectories",
        "Stakeholder mapping for regional economic projects",
        "Corporate governance audit and restructuring",
        "Risk-weighted capital allocation advisory"
      ],
      industrialContext: "Essential for established industrial firms pivoting to green-tech or startups scaling toward public markets."
    }
  },
  {
    title: "Corporate & Commercial Counsel",
    description: "Sophisticated representation that bridges the gap between legal theory and commercial reality. High-stakes counsel for transactions and regulatory compliance.",
    icon: "fa-scale-balanced",
    tags: ["JD/LLM Counsel", "Corporate Law", "Transactions"],
    benefits: [
      "Engineering precise contracts that immunize against liability.",
      "Navigating multi-jurisdictional regulatory frameworks.",
      "Proactive General Counsel on corporate governance."
    ],
    expansiveDetails: {
      philosophy: "Effective counsel prevents litigation by architecting the commercial environment. Every contract must support the balance sheet while protecting the enterprise.",
      focusAreas: [
        "Complex Commercial Agreement Negotiation",
        "Municipal & Administrative Law Proceedings",
        "Shareholder Dispute Resolution",
        "Regulatory Compliance Management"
      ],
      methodology: [
        "Forensic analysis of contractual exposure",
        "Iterative negotiation of high-value commercial terms",
        "Administrative advocacy before regulatory tribunals",
        "Immunization of supply chain agreements"
      ],
      industrialContext: "Critical for municipal bodies and private sector firms managing multi-party commercial infrastructure."
    }
  },
  {
    title: "Privacy Governance & AI Ethics",
    description: "Architecting trust through robust information governance. We align data practices with global regulations and emerging AI standards.",
    icon: "fa-fingerprint",
    tags: ["Data Privacy", "CIPP/C Professional", "AI Compliance"],
    benefits: [
      "Implementing AI-ready privacy governance architectures.",
      "Conducting critical Privacy Impact Assessments (PIA).",
      "Designing customer-centric transparency protocols."
    ],
    expansiveDetails: {
      philosophy: "Data is a liability until it is governed. In the era of Generative AI, privacy is an ethical engineering challenge that defines brand value.",
      focusAreas: [
        "AI Governance & Algorithmic Ethics Audits",
        "Cross-border Data Transfer Compliance (GDPR/PIPEDA/CPPA)",
        "Enterprise Privacy Management (EPM) Frameworks",
        "Data Monetization Risk Strategy"
      ],
      methodology: [
        "Systematic Privacy Impact Assessments (PIA)",
        "Development of Algorithmic Transparency Reports",
        "Privacy-by-Design (PbD) implementation reviews",
        "Board-level data risk reporting"
      ],
      industrialContext: "Indispensable for SaaS, FinTech, and healthcare organizations deploying machine learning models."
    }
  },
  {
    title: "Cybersecurity Policy & Risk",
    description: "Delivering technical policy solutions for digital volatility. We translate complex threats into board-level strategic imperatives.",
    icon: "fa-shield-halved",
    tags: ["M.Eng Policy", "Cyber Resilience", "Technical Risk"],
    benefits: [
      "Developing technical risk mitigation strategies.",
      "Auditing vendor security postures to eliminate vulnerabilities.",
      "Leading technical due diligence for M&A activities."
    ],
    expansiveDetails: {
      philosophy: "Cybersecurity is a policy problem as much as a technical one. Technical risk must be translated into legal and financial exposure for the Board.",
      focusAreas: [
        "Cyber-Liability Insurance Optimization",
        "Incident Response Policy & Tabletop Exercises",
        "Supply Chain & Third-Party Risk Management",
        "Technical-Legal Incident Crisis Advisory"
      ],
      methodology: [
        "Gap analysis between technical security and legal policy",
        "Stress-testing of organizational response playbooks",
        "Technical due diligence for digital asset acquisition",
        "Cybersecurity governance framework alignment (NIST, ISO)"
      ],
      industrialContext: "Tailored for organizations managing critical infrastructure, high-value IP, or sensitive client data."
    }
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "A Judicial Review Of Ontario's Anti-SLAPP Legislation",
    outlet: "Municipal World",
    date: "Oct 2016",
    summary: "Critical analysis of 1704604 Ontario Ltd. v. Pointes Protection Association. KEY TAKEAWAY: Successfully navigating the tension between commercial development and public advocacy. Tim deconstructs how Anti-SLAPP laws impact municipal projects, providing guidance for regional stakeholders.",
    link: "https://www.municipalworld.com/articles/a-judicial-review-of-ontarios-anti-slapp-legislation-1704604-ontario-ltd-v-pointes-protection-association/"
  },
  {
    title: "Federal Government Suspends CASL's Private Right of Action",
    outlet: "Mondaq",
    date: "June 2017",
    summary: "Analysis of regulatory changes in Canada's Anti-Spam Legislation. KEY TAKEAWAY: Proactive risk calibration. Tim highlights how shifts in enforcement mechanisms alter the digital marketing landscape, informing foundation-level cybersecurity pillars.",
    link: "https://www.mondaq.com/canada/class-actions/601338/federal-government-suspends-casls-private-right-of-action"
  },
  {
    title: "Islamic Securitization: Structuring for Shari'ah Compliance",
    outlet: "Law in International Finance (3rd Ed)",
    date: "2009",
    summary: "Academic contribution to the definitive text on international finance (Carswell). KEY TAKEAWAY: Structural precision in cross-border finance. Tim details the complex legal architecture required for Shari'ah-compliant investment vehicles.",
    link: "https://store.thomsonreuters.ca/en-ca/products/law-in-international-finance-30842408"
  },
  {
    title: "Snitches Don't Get Stitches: IPC Upholds Municipal Privacy",
    outlet: "Mondaq",
    date: "June 2017",
    summary: "Examination of IPC Order MO-3439 regarding municipal transparency. KEY TAKEAWAY: Institutional Confidentiality. Tim explores how protecting complainant confidentiality is essential for effective local governance and administrative efficiency.",
    link: "https://www.mondaq.com/canada/privacy-protection/601824/snitches-dont-get-stitches-ipc-upholds-municipal-decision-to-withhold-complainant-information-under-mfippa"
  },
  {
    title: "Monetary Claims & Constructive Trusts on Title",
    outlet: "Mondaq",
    date: "Aug 2017",
    summary: "Strategic review of limitations in property law title encumbrance. KEY TAKEAWAY: Protecting Real Estate Liquidity. Tim analyzes Ontario case law to show that certificates of pending litigation cannot encumber land for purely monetary claims.",
    link: "https://www.mondaq.com/canada/land-law-agriculture/616082/monetary-claims-based-on-constructive-trust-cannot-be-registered-on-title"
  },
  {
    title: "No Collective Agreement, No Grievance: Jurisdictional Bounds",
    outlet: "Mondaq",
    date: "May 2017",
    summary: "Examination of jurisdictional boundaries in labor disputes. KEY TAKEAWAY: Precision in Labor Relations. Tim highlights the legal necessity of an in-force collective agreement for grievance arbitration jurisdiction.",
    link: "https://www.mondaq.com/canada/arbitration-dispute-resolution/597272/no-collective-agreement-no-grievance-arbitrators-lack-jurisdiction-to-hear-grievances-arising-before-a-collective-agreement-is-in-effect"
  },
  {
    title: "MOECC Proposing Amendments To Cap And Trade Program",
    outlet: "Mondaq",
    date: "April 2017",
    summary: "Forensic review of greenhouse gas reporting and verification standards. KEY TAKEAWAY: Navigating the Technical-Legal Landscape. Tim translates technical MOECC requirements into clear risk assessments for industrial clients.",
    link: "https://www.mondaq.com/canada/oil-gas-electricity/583862/moecc-proposing-amendments-to-cap-and-trade-program-regulation-and-quantification-reporting-and-verification-of-greenhouse-gas-emissions-regulation"
  }
];

export const RESOURCES = [
  { name: "Supreme Court of Canada", link: "https://www.scc-csc.ca/", icon: "fa-scale-balanced" },
  { name: "CanLII", link: "https://www.canlii.org/", icon: "fa-book-legal" },
  { name: "PACC-CCAP Certification", link: "https://pacc-ccap.ca/certification/", icon: "fa-certificate" },
  { name: "IAPP (CIPP/C)", link: "https://iapp.org/", icon: "fa-user-shield" },
  { name: "Cyber Centre Canada", link: "https://www.cyber.gc.ca/en", icon: "fa-shield-halved" },
  { name: "NIST Standards", link: "https://www.nist.gov/", icon: "fa-microchip" },
  { name: "ISACA Governance", link: "https://www.isaca.org/", icon: "fa-network-wired" },
  { name: "SSM Community Dev", link: "https://www.saultstemarie.ca/Government/City-Departments/Community-Development-Enterprise-Services.aspx", icon: "fa-city" },
  { name: "AI Strategy Canada", link: "https://www.canada.ca/en/innovation-science-economic-development/programs/science-technology-innovation/artificial-intelligence.html", icon: "fa-robot" }
];
