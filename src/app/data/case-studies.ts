import { CaseStudy } from './models';

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'world-vision',
    eyebrow: 'World Vision Australia · Capstone',
    title: 'Donor retention analysis',
    heroImage: 'assets/donor-retention-method.svg',
    summary: 'Diagnosing why almost a third of donors gave once and never came back.',
    dates: 'Mar - May 2026',
    tools: ['Power BI', 'DAX', 'Python', 'Excel', 'PowerPoint'],
    problem:
      'How can World Vision Australia turn more one-off donors into repeat donors? ' +
      'Almost a third of supporters gave once and never again.',
    role: 'Owned data modelling, DAX development and analytical storytelling on the project team.',
    data:
      'Six integrated datasets - supporter demographics, one-off donations, ongoing commitments, ' +
      'communications sent, communication clicks and portal engagement. Over 61,000 supporters and ' +
      'more than 3 million records in all.',
    approach: [
      'Built a supporter-centric star schema with supporter demographics as the anchor table.',
      'Classified every supporter as a true one-time or repeat donor with DAX measures in Power BI.',
      'Framed five diagnostic questions, from the scale and timing of the problem to whether focus shifted to acquisition.',
      'Compared pre-2020 and post-2020 donor cohorts on communication reach and channel use.',
      'Traced which campaign types produced the most one-time donors.',
      'Used Python for exploratory analysis and to test communication exposure against retention.',
    ],
    insight: 'More than 95% of one-time donors never received a single email or SMS after their first gift.',
    insightDetail:
      'Donors weren\'t losing interest - they were never contacted. Nearly everyone who heard from ' +
      'World Vision gave again, compared with fewer than half of those who didn\'t. Outreach dropped ' +
      'sharply after 2020, just as crisis appeals for COVID, Ukraine and the Turkey-Syria earthquake ' +
      'brought in a wave of new donors. The retention problem is operational, not behavioural.',
    stats: [
      { value: '1 in 3', label: 'supporters gave once and never again' },
      { value: '9 in 10', label: 'of those one-time donors joined in the last five years' },
      { value: '95%+', label: 'of them were never contacted after their first gift' },
    ],
    recommendations: [
      'Enrol every new donor in an automated 90-day journey: a welcome message, an impact story, ' +
        'cause updates, then a second-gift ask.',
      'Build a "crisis-to-cause" pathway that moves emergency-appeal donors toward long-term causes ' +
        'like child sponsorship.',
      'Re-engage the post-2020 one-time donors who were never contacted, with email, SMS and ' +
        'second-gift invitations.',
      'Track retention with donor lifecycle dashboards and KPIs such as time to first communication, ' +
        'repeat conversion rate and reach by cohort.',
    ],
    outcome:
      'We presented the findings and recommendations to World Vision Australia, showing that the ' +
      'retention gap came from donors not being contacted rather than donors losing interest.',
    images: ['assets/world-vision-data-model.jpg'],
    imageAlt:
      'Power BI model view showing the supporter-centric star schema: Supporter Demographics at the ' +
      'centre, linked to one-off donations, ongoing commitments, communications sent, communication ' +
      'clicks and portal engagement tables.',
    imageCaption:
      'The dashboards and supporter data are covered by an NDA, so this shows the Power BI data model ' +
      'I built instead.',
  },
  {
    slug: 'retail-data-warehouse',
    eyebrow: 'Retail POS & ERP · Data warehouse',
    title: 'Integrating POS & ERP System',
    heroImage: 'assets/retail-dw-star-schema.svg',
    summary: '95,000+ records from 13 sources into a dimensional model with full history.',
    dates: 'Jun - Sep 2026',
    tools: ['Pentaho Data Integration', 'MySQL', 'MySQL Workbench', 'PowerPoint'],
    problem:
      'Fresh Harvest Retail Group ran two systems that had never been integrated: a POS for sales and ' +
      'an ERP for cost, suppliers and stock. With no common product key, margin was reconciled by hand ' +
      'and every team worked from its own version of the truth.',
    role: 'Responsible for dimensional data modelling, ETL pipeline development and analytical insight on a group project.',
    data:
      'POS sales, customers and stores, plus ERP products, suppliers and purchase orders, along with ' +
      'address history, public holidays and cold-chain invoices. 95,000+ records across 13 source datasets.',
    approach: [
      'Designed a fact constellation: sales, purchase-order and inventory facts sharing conformed date, ' +
        'product, supplier and store dimensions.',
      'Set the sales grain at one transaction line, so every measure rolls up to any customer, store, ' +
        'market, product or period.',
      'Built a Pentaho transformation per table, dimensions first and the fact last, to cleanse and load ' +
        'over 60,000 sales lines, catching a duplicate SKU on the way.',
      'Applied SCD Type 2 to customer, store and product, and backfilled address history so customers ' +
        'who moved keep their earlier sales in the right state.',
      'Costed every sale at the most recent purchase-order cost before the sale date, and computed revenue, ' +
        'cost and margin at line-item grain in MySQL.',
      'Enriched the model with public holidays and three years of cold-chain invoices, then answered five ' +
        'management questions in SQL.',
    ],
    insight: 'Perishables looked profitable on paper. Once cold-chain logistics were counted, they were losing over $1M.',
    insightDetail:
      'Standard costing showed a healthy margin on fresh produce and chilled goods, but cold-chain ' +
      'costs over the same three years were nearly six times larger, turning them into a significant ' +
      'loss. It only surfaced because the model joins sales to ERP and logistics costs. Elsewhere, Metro ' +
      'stores earned more than double the Regional margin, and loyalty tier turned out not to predict ' +
      'customer profitability at all.',
    stats: [
      { value: 'Profit', label: 'what perishables showed on standard costing' },
      { value: '−$1M+', label: 'their true margin after cold-chain costs' },
      { value: '2×', label: 'Metro margin compared with Regional' },
    ],
    recommendations: [
      'Review perishable ranging and cold-chain logistics contracts: the apparent product margin hides a ' +
        'significant loss.',
      'Rebuild the loyalty program around actual spend and repeat-purchase behaviour rather than tier status.',
      'Use the Metro / Regional / Rural classification to guide range, promotion and investment instead of ' +
        'resourcing every market equally.',
      'Protect online fulfilment capacity, and judge physical stores on margin rather than revenue.',
    ],
    nextSteps:
      'Extend the warehouse with inventory, promotion and supplier-performance indicators, and load price ' +
      'and store-reclassification history into the product and store dimensions, which are already built ' +
      'for SCD Type 2.',
    images: ['assets/retail-dw-process.svg'],
    imageAlt:
      'Process diagram in six steps: understand the problem, extract and stage the sources, design the ' +
      'dimensional model, build the ETL pipelines in Pentaho, enrich and verify with SQL, and analyse and recommend.',
  },
  {
    slug: 'techtitans',
    eyebrow: 'TechTitans · Internship, in progress',
    title: 'Finding the right customers',
    heroImage: 'assets/techtitans.svg',
    summary: 'Business analysis for a new profitability and intelligence platform for Australian SMEs.',
    dates: 'Oct 2026 - Present',
    tools: ['Excel'],
    problemLabel: 'The brief',
    problem:
      'TechTitans is exploring an SME business profitability and intelligence platform. The product ' +
      'vision and proposed capabilities are hypotheses at the discovery stage, to be validated before ' +
      'anything is built.',
    role:
      'Business Analyst Intern: market and competitor research, customer discovery planning, and ' +
      'requirements analysis.',
    data:
      'The product brief, market, competitor and pricing research on the Australian SME software ' +
      'market, and stakeholder needs.',
    approachLabel: 'Current approach',
    noImage: true,
    approach: [
      'Researched the market, competitors and pricing to inform product positioning in the Australian ' +
        'SME software market.',
      'Planned customer discovery, including target-segment evaluation and structured stakeholder ' +
        'interview design.',
      'Analysed business requirements, keeping them traceable to stakeholder needs.',
      'Supported agile delivery through backlog management, decision logging and risk identification.',
    ],
    outcome:
      'In progress. The platform\'s capabilities are still hypotheses, and customer discovery will test ' +
      'which of them SMEs actually need before the requirements are firmed up.',
  },
];

/** Look up one case study by its URL slug (returns undefined if not found). */
export function findCaseStudy(slug: string | null): CaseStudy | undefined {
  return CASE_STUDIES.find(c => c.slug === slug);
}
