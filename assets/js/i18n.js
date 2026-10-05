/* ==========================================================================
   ZAAD POS - Internationalization (i18n) Engine & Translations Dictionary
   Supports English (LTR) and Arabic (RTL) seamlessly across all pages.
   ========================================================================== */

const translations = {
  en: {
    // Brand & General Navigation
    "brand_tagline": "DESKTOP RETAIL",
    "nav_home": "Home",
    "nav_why": "Why ZAAD",
    "nav_dailyz": "Daily Z",
    "nav_shift": "Shifts",
    "nav_workflow": "Workflow",
    "nav_showcase": "Showcase",
    "nav_features": "Features",
    "nav_security": "Security",
    "nav_contact": "Contact",
    "nav_privacy": "Privacy Policy",
    "nav_terms": "Terms of Service",
    "btn_request_demo": "Request Demo",
    "btn_explore_features": "Explore Features",
    "btn_back_website": "Back to Website",
    "lang_toggle": "العربية",

    // SECTION 1: HERO
    "hero_eyebrow": "Integrated Store Management System",
    "hero_title": "Your Entire Store Under Control.",
    "hero_title_sub": "From the first barcode scan... to daily closing.",
    "hero_description": "ZAAD POS integrates sales, inventory, cashier shifts, customer debt, suppliers, stock counts, and financial movements into one unified desktop computer system engineered for supermarkets, hypermarkets, and retail stores.",
    "hero_statement": "Fast during peak hours. Clear accounting. Your store data stays with you.",
    "hero_cta_demo": "Request a Demo",
    "hero_cta_watch": "Watch System in Action",
    "badge_no_internet": "• Works 100% Offline",
    "badge_local_storage": "• Data Stored Locally",
    "badge_barcode_thermal": "• Barcode & Thermal Printing",
    "badge_dailyz_auto": "• Automated Daily Z",
    "status_shift_open": "Shift Open ✓",
    "status_stock_updated": "Stock Updated Real-time ✓",
    "status_dailyz_time": "Daily Z Automated — 02:00 AM",
    "status_offline_ready": "100% Offline — No Internet Needed",
    "hero_mockup_title": "ZAAD POS System — Point of Sale Checkout (Al-Belgiky Hypermarket)",
    "hero_mockup_zoom": "Click to expand high-resolution screenshot",

    // SECTION 2: WHY ZAAD
    "why_title": "Not Just Another POS Software.",
    "why_subtitle_highlight": "ZAAD Connects Your Entire Store Operation.",
    "why_desc": "Every sale, purchase, collection, or expense directly impacts inventory, cash flow, and audit records.",
    "card1_title": "Know Where Your Money Is",
    "card1_desc": "Track sales, collections, expenses, suppliers, and payment channels in one clear financial view.",
    "card2_title": "Inventory Moves with Your Operations",
    "card2_desc": "Sales, purchases, returns, or counts — item stock remains directly tied to the transaction.",
    "card3_title": "Every Shift Has an Assigned Operator",
    "card3_desc": "From opening float to actual cash in drawer, expected balances, and shortage or surplus.",
    "card4_title": "Your Store Data Stays Yours",
    "card4_desc": "Core operations and sensitive business records are stored 100% locally on your store computer.",

    // SECTION 3: DAILY Z
    "dailyz_eyebrow": "From Day Start... to Every Single Pound",
    "dailyz_title": "At the End of the Day... <span class=\"highlight-text\">Know Exactly What Happened.</span>",
    "dailyz_desc": "Instead of piecing together numbers from multiple screens, ZAAD summarizes the commercial business day into one clear Daily Z: previous balance, today's money in, today's money out, and current balance — with transaction details and payment channels.",
    "flow_step1": "Yesterday's Balance",
    "flow_step2": "Today's Money In",
    "flow_step3": "Today's Money Out",
    "flow_step4": "Current Available",
    "dailyz_email_text": "And at day end? The report can be automatically delivered to the store owner.",
    "dailyz_email_badge": "📧 Automated Gmail Delivery",
    "dailyz_proof_label": "Authentic Report Issued by ZAAD POS",
    "dailyz_page2_label": "Daily Z Report — Page 2",

    // SECTION 4: SHIFT CONTROL
    "shift_eyebrow": "Shift Audit & Control",
    "shift_title": "Every Shift Reconciled to the Last Pound.",
    "shift_subtitle_highlight": "From float handover... to cash drawer reconciliation.",
    "shift_desc1": "At shift closing, ZAAD aggregates cashier sales, calculates expected drawer cash, compares it with actual cash entered, and highlights matching status, shortage, or surplus.",
    "shift_desc2": "After closing, the shift remains archived with date, responsible cashier, duration, and financials for audit whenever needed.",
    "shift_step1_label": "1 — Reconcile & Close Shift",
    "shift_tag_expected": "Expected Cash in Drawer",
    "shift_tag_actual": "Actual Cash Counted",
    "shift_tag_diff": "Shortage / Surplus",
    "shift_trans_badge": "Shift Reconciled ✓ → Saved to Archive",
    "shift_step2_label": "2 — Archived & Audit Ready",
    "shift_modal_title": "Shift Closing & Cash Reconciliation Modal",
    "shift_archive_title": "Shift Archive Register",
    "shift_final_statement": "Every shift has an operator. Every variance has a number. Every closing has an audit record.",

    // Workflow Section
    "workflow_tag": "End-to-End Operational Lifecycle",
    "workflow_title": "Designed for High-Speed Retail Workflow",
    "workflow_subtitle": "ZAAD POS seamlessly connects every operational phase of supermarket management into one unified desktop application.",
    "workflow_step1_title": "1. Sell",
    "workflow_step1_desc": "Fast barcode scanning, catalog search, split payments (Cash, Vodafone Cash, InstaPay, Visa), and instant thermal receipt printing.",
    "workflow_step2_title": "2. Track",
    "workflow_step2_desc": "Real-time stock deduction, inventory movements, customer credit debt tracking, supplier balances, and operational expenses.",
    "workflow_step3_title": "3. Reconcile",
    "workflow_step3_desc": "Cashier shift opening and closing, active cash float verification, drawer duration, and shortage/surplus calculation.",
    "workflow_step4_title": "4. Report",
    "workflow_step4_desc": "Authoritative Daily Z financial business-day summaries with breakdown by payment channel and automated PDF report delivery.",
    "workflow_step5_title": "5. Backup",
    "workflow_step5_desc": "Local SQLite database backups with one-click database restoration workflows to keep business data safe on store premises.",

    // Showcase Section
    "showcase_tag": "Production Software Interface",
    "showcase_title": "Explore the Real ZAAD POS Experience",
    "showcase_subtitle": "Inspect authentic screenshots of ZAAD POS in active retail store operation.",
    "showcase1_title": "Fast, High-Volume Point of Sale",
    "showcase1_desc": "Designed for rapid cashier throughput during peak retail hours with full barcode support and instant item selection.",
    "showcase1_item1": "Instant barcode scanning and search catalog with category filters",
    "showcase1_item2": "Multi-channel payment options: Cash, Vodafone Cash, InstaPay, Visa & Credit",
    "showcase1_item3": "Customer cash change calculator and instant invoice completion",
    "showcase2_title": "Operational Thermal Receipts & Printing",
    "showcase2_desc": "Generates clean, accurate thermal receipts formatted specifically for 58mm and 80mm receipt printers.",
    "showcase2_item1": "Complete store header branding, phone number, and customizable tagline",
    "showcase2_item2": "Itemized list showing quantity, price, discount, service fees, and totals",
    "showcase2_item3": "Direct thermal printer integration with instant keyboard shortcut (Ctrl+P)",
    "showcase3_title": "Full Sales History & Transaction Audit",
    "showcase3_desc": "Every sale is recorded in a searchable audit register with instant filtering and return status tracking.",
    "showcase3_item1": "Filter transactions by invoice number, date range, or payment status",
    "showcase3_item2": "Track full payments, partial returns, and debt settlements",
    "showcase3_item3": "One-click invoice reprint and detailed view modal",
    "showcase4_title": "Operative Shift Management & Control",
    "showcase4_desc": "Protects store revenue by enforcing structured cashier shift opening, duration tracking, and closing reconciliation.",
    "showcase4_item1": "Clear operator identification and business-day association",
    "showcase4_item2": "Live shift duration timer and drawer status monitoring",
    "showcase4_item3": "Secure shift closing drawer lock and shift archive lookup",

    // Features Section
    "features_tag": "Core Engine Capabilities",
    "features_title": "Complete Retail Management Capabilities",
    "features_subtitle": "Everything required to operate modern supermarkets and retail stores safely and efficiently.",
    "feat_pos_title": "Point of Sale",
    "feat_pos_desc": "Rapid barcode scanning, product catalog search, multiple payment channels, split billing, and instant thermal printing.",
    "feat_inv_title": "Inventory Management",
    "feat_inv_desc": "Real-time stock deduction, movement tracking, category organization, low-stock warnings, and barcode generation.",
    "feat_pur_title": "Purchases & Suppliers",
    "feat_pur_desc": "Track supplier invoices, incoming shipments, payment histories, outstanding supplier balances, and procurement records.",
    "feat_credit_title": "Customer Credit & Debt",
    "feat_credit_desc": "Manage customer credit accounts, track unpaid balances, record partial payments, and issue debt receipts.",
    "feat_exp_title": "Operational Expenses",
    "feat_exp_desc": "Log store expenses, utility bills, maintenance costs, and petty cash withdrawals to maintain complete financial clarity.",
    "feat_count_title": "Guided Inventory Count",
    "feat_count_desc": "Physical inventory counting tool with stock variance calculation and controlled adjustment posting.",
    "feat_shift_title": "Shift Management",
    "feat_shift_desc": "Structured cashier shift opening/closing, active drawer float monitoring, and shift duration records.",
    "feat_dailyz_title": "Daily Z Reporting",
    "feat_dailyz_desc": "Authoritative business-day reports summarizing total sales, payment channel breakdown, expenses, and net money flows.",
    "feat_backup_title": "Local Backup & Restore",
    "feat_backup_desc": "Local SQLite database snapshot backups and controlled restoration workflows to prevent data loss.",
    "feat_email_title": "Automated Email Reports",
    "feat_email_desc": "Optional automated Daily Z PDF report delivery directly to store owner emails via Google OAuth 2.0.",
    "feat_pay_title": "Multiple Payment Channels",
    "feat_pay_desc": "Full support for Cash, Vodafone Cash, InstaPay, Visa, and Customer Debt billing on every invoice.",
    "feat_perm_title": "Staff Role Permissions",
    "feat_perm_desc": "Restricted cashier access, protected manager actions, and activity accountability.",

    // Security Section
    "security_tag": "Data Ownership & Security",
    "security_title": "Local Data Storage & Privacy Transparency",
    "security_desc": "ZAAD POS prioritizes local data sovereignty. All critical store data—sales, inventory, customers, supplier accounts—is stored locally on the retail store's computer in a high-performance SQLite database.",
    "sec_item1_title": "100% Local Data Control",
    "sec_item1_desc": "No cloud database subscription or external server hosting required.",
    "sec_item2_title": "Optional Google OAuth Integration",
    "sec_item2_desc": "Store owners can optionally connect Gmail to receive automated Daily Z business reports.",
    "sec_item3_title": "Zero Inbox Reading or Data Selling",
    "sec_item3_desc": "Gmail access scope (gmail.send) is used strictly to send PDF reports. ZAAD POS never reads or scans user emails.",
    "sec_box_title": "Google API Verification Notice",
    "sec_box_desc": "ZAAD POS requests restricted Gmail access solely for sending automated owner reports.",
    "sec_box_item1": "Scope requested: https://www.googleapis.com/auth/gmail.send",
    "sec_box_item2": "Credentials stored securely on local desktop disk",
    "sec_box_item3": "Revocable anytime via Google Account settings",
    "btn_privacy": "Read Privacy Policy",
    "btn_terms": "View Terms",

    // Contact Section
    "contact_tag": "Commercial & Support",
    "contact_title": "Get in Touch with ZAAD POS",
    "contact_subtitle": "Request a product demonstration or speak directly with our engineering and product support team.",
    "contact_info_title": "Contact Information",
    "contact_info_desc": "We provide direct commercial support for retail store deployments.",
    "contact_email_title": "Email Support",
    "contact_phone_title": "Phone & WhatsApp",
    "contact_linkedin_title": "LinkedIn Profile",
    "contact_founder": "Built and maintained by Gehad Qabel",
    "contact_form_title": "Schedule a Product Demo",
    "contact_form_desc": "See how ZAAD POS can optimize your retail supermarket operations.",
    "form_store_label": "Business / Store Name",
    "form_store_ph": "e.g. Al-Belgiky Hypermarket",
    "form_contact_label": "Contact Email or Phone",
    "form_contact_ph": "e.g. owner@example.com or 010xxxxxxxx",
    "form_type_label": "Store Type",
    "form_type_opt1": "Supermarket",
    "form_type_opt2": "Hypermarket",
    "form_type_opt3": "Minimarket / Grocery",
    "form_type_opt4": "Retail Store",
    "form_submit": "Submit Demo Request",

    // Footer & Modals
    "footer_brand_desc": "High-performance desktop point-of-sale and retail management system for modern supermarket and retail operations.",
    "footer_col_nav": "Navigation",
    "footer_col_security": "Trust & Security",
    "footer_col_contact": "Contact",
    "footer_rights": "© 2026 ZAAD POS (zaadsystem.com). All rights reserved. Built and maintained by Gehad Qabel.",
    "modal_demo_title": "Request a ZAAD POS Demo",
    "modal_demo_desc": "Contact us via email or WhatsApp to schedule a live demo of ZAAD POS.",
    "modal_demo_wa": "Connect via WhatsApp (+20 102 924 7516)",
    "modal_demo_mail": "Email support@zaadsystem.com",

    "nav_accounts": "Accounts & Debt",
    "nav_stocktaking": "Stocktaking",

    // SECTION: CUSTOMER CREDIT & SUPPLIER ACCOUNTS
    "accounts_eyebrow": "Customer & Supplier Accounting",
    "accounts_title": "Every pound owed to you... and owed by you, precisely accounted for.",
    "accounts_subtitle": "From customer credit accounts to supplier balances, ZAAD records every invoice, payment, and return in a clear ledger with exact timestamps and balances.",
    
    // Customer Side
    "acc_customer_title": "Money with a customer? Their full statement is right in front of you.",
    "acc_customer_subtitle": "Credit sales, collections, returns, and a daily transaction ledger.",
    "acc_tag_credit_sale": "Credit Sale",
    "acc_tag_collections": "Collections",
    "acc_tag_returns": "Returns",
    "acc_tag_date_filter": "Date Filter",
    "acc_customer_caption": "ZAAD POS — Customer Credit Account Statement Modal",

    // Supplier Side
    "acc_supplier_title": "Owe money to a supplier? Never lost in a sea of invoices.",
    "acc_supplier_subtitle": "Shipments, payments, returns, and outstanding balance in a single statement.",
    "acc_tag_shipments": "Shipments",
    "acc_tag_payments": "Payments",
    "acc_tag_supplier_returns": "Returns",
    "acc_tag_balance_due": "Outstanding Balance",
    "acc_supplier_caption": "ZAAD POS — Supplier Account Statement & Transaction History Modal",

    // Shared / Closing
    "acc_badge_connector": "Every transaction ← with date ← with balance ← with details",
    "acc_cust_window_title": "Customer Account Statement",
    "acc_supp_window_title": "Supplier Account Statement",
    "acc_final_statement": "Instead of fragmented notebooks... every account has a ledger, and every movement leaves a trace.",

    // SECTION: INVENTORY COUNT / STOCKTAKING
    "stock_eyebrow": "Inventory Count & Stock Audit",
    "stock_title": "Count your inventory... without starting from scratch every time.",
    "stock_subtitle": "Start a count session and scan barcodes or search by name. ZAAD instantly compares physical quantities against system stock, revealing matching items, shortages, and surpluses before committing stock adjustments.",
    
    "stock_main_caption": "ZAAD POS — Active Inventory Stocktaking Session (Barcode & Search Audit)",
    "stock_result_caption": "ZAAD POS — Final Inventory Adjustment Council & Summary Modal",

    // Callout Blocks
    "stock_callout1_title": "Paused your count? Pick up right where you left off.",
    "stock_callout1_desc": "Draft stock counts are saved locally and can be resumed even after restarting the application.",
    
    "stock_callout2_title": "Performing a partial count? Uncounted stock remains untouched.",
    "stock_callout2_desc": "When committing the audit, only counted items are updated—all uncounted catalog items stay completely untouched.",

    // Sequence States
    "stock_state_matching": "Matching ✓",
    "stock_state_shortage": "Shortage (-)",
    "stock_state_surplus": "Surplus (+)",
    "stock_final_callout": "See the difference first... then adjust stock when you're ready.",
    "stock_active_window_title": "Active Stocktaking Audit Session",
    "stock_result_window_title": "Final Stock Adjustment Council",

    "nav_purchase_receiving": "Receiving",

    // SECTION: PURCHASE RECEIVING & MULTI-PAYMENT
    "pur_eyebrow": "Smart Procurement & Package Receiving",
    "pur_title": "Receive by the carton... and let ZAAD calculate the pieces.",
    "pur_subtitle": "Select how the item is received and the number of pieces per package, then enter the number of packages purchased. ZAAD automatically converts it into the actual piece quantity entering inventory.",

    "pur_badge_live": "Watch it happen live",
    "pur_video_title": "ZAAD POS — Purchase Invoice Receiving & Package Conversion",

    // Equation Cards
    "pur_eq_cartons": "2 Cartons",
    "pur_eq_multiplier": "× 24 Pieces",
    "pur_eq_total": "= 48 Pieces in Inventory",
    "pur_eq_note": "Explanatory example — package unit sizes can be customized per product.",

    // Flow Steps
    "pur_flow_step1": "Goods Receiving",
    "pur_flow_step2": "Carton Quantity",
    "pur_flow_step3": "Pieces per Package",
    "pur_flow_step4": "Auto Conversion",
    "pur_flow_step5": "Inventory Update",

    // Multi-Payment
    "pur_pay_title": "And the supplier invoice? Split payment exactly as it actually happened.",
    "pur_pay_subtitle": "Record purchase invoice payments across multiple supported payment channels when needed, so recorded transactions match actual funds paid.",
    
    // Supported Payment Methods
    "pur_pay_cash": "Cash",
    "pur_pay_voda": "Vodafone Cash",
    "pur_pay_insta": "InstaPay",
    "pur_pay_visa": "Visa",
    "pur_pay_debt": "Supplier Credit",

    // Final Line
    "pur_final_statement": "From carton receiving... to the last piece entering inventory, ZAAD handles the math.",

    "nav_backup": "Backup",

    // SECTION 8: BACKUP & RESTORE
    "backup_eyebrow": "Data Safety & Business Continuity",
    "backup_title": "Years of store data never lost to a hardware failure.",
    "backup_subtitle": "ZAAD POS protects your store data with automated background backups, plus one-click manual snapshots and quick restoration whenever needed.",
    "backup_badge_trust": "Your store data deserves a rollback plan.",
    "backup_statement": "Automated + Manual + Clear Restoration Options.",
    "backup_modal_caption": "ZAAD POS — Automated Snapshot Backup & Database Restore Modal",

    // Backup Callouts
    "backup_tag_auto": "Automated Backup",
    "backup_tag_manual": "Manual Snapshot",
    "backup_tag_latest": "Restore Latest",
    "backup_tag_file": "Restore from File",

    // SECTION 9: COMPACT FEATURE MATRIX
    "matrix_eyebrow": "Complete Operational Toolkit",
    "matrix_title": "All the Tools Your Store Needs",
    "matrix_subtitle": "From Point of Sale to reports and local backups — all core operational tools in one system.",

    "matrix_item1_title": "Point of Sale (POS)",
    "matrix_item1_sub": "Fast checkout & thermal receipts",
    "matrix_item2_title": "Inventory Control",
    "matrix_item2_sub": "Real-time stock deduction",
    "matrix_item3_title": "Purchases & Receiving",
    "matrix_item3_sub": "Package conversion & invoices",
    "matrix_item4_title": "Customer Accounts",
    "matrix_item4_sub": "Credit debt & payment ledgers",
    "matrix_item5_title": "Supplier Accounts",
    "matrix_item5_sub": "Shipments & balance tracking",
    "matrix_item6_title": "Returns & Refunds",
    "matrix_item6_sub": "Item return audit register",
    "matrix_item7_title": "Operational Expenses",
    "matrix_item7_sub": "Store expense logging",
    "matrix_item8_title": "Guided Stocktaking",
    "matrix_item8_sub": "Stock variance calculation",
    "matrix_item9_title": "Shift Control",
    "matrix_item9_sub": "Cashier float & drawer audit",
    "matrix_item10_title": "Daily Z Reports",
    "matrix_item10_sub": "Automated day-end summary",
    "matrix_item11_title": "Local Backups",
    "matrix_item11_sub": "One-click snapshot restore",
    "matrix_item12_title": "Staff Permissions",
    "matrix_item12_sub": "Role-based action control",

    // SECTION 10: SECURITY & PRIVACY
    "sec_eyebrow": "Data Ownership & Security",
    "sec_title": "Your Store Data Stays Under Your Control.",
    "sec_subtitle": "Core operational store data is safely stored locally on your device.",
    "sec_subtext": "Core daily operations require no cloud database subscription or continuous internet connection.",
    
    "sec_point1": "100% Local Execution",
    "sec_point2": "No Internet Dependency",
    "sec_point3": "Local Operational Ledger",

    "sec_gmail_title": "Optional Gmail Integration",
    "sec_gmail_badge": "OPTIONAL",
    "sec_gmail_desc": "ZAAD POS utilizes the gmail.send scope strictly to dispatch automated Daily Z reports when enabled, and never accesses or reads inbox contents.",

    // SECTION 11: FINAL DEMO & CONVERSION CTA
    "cta_eyebrow": "Live Demonstration",
    "cta_title": "See ZAAD POS Working for Your Store Firsthand",
    "cta_subtitle": "Schedule a live demonstration and see sales, inventory, shifts, and reports in action.",
    "cta_btn_primary": "Request Demo",
    "cta_btn_wa": "Connect via WhatsApp",

    // Floating WhatsApp & Founder Trust Strip & Footer Details
    "float_wa_label": "Connect on WhatsApp",
    "founder_badge": "Practical Store Vision",
    "founder_headline": "Built to Simplify Daily Store Operations",
    "founder_message": "\"Behind ZAAD POS is one vision: building a practical system that helps store owners track sales, inventory, shifts, and cash movements from one place.\"",
    "founder_subline": "From checkout and inventory to shifts and reporting.",
    "founder_title": "Founder & Product Owner — ZAAD POS",
    "founder_verified_tag": "Founder",
    "founder_direct_btn": "Direct WhatsApp",
    "footer_brand_desc": "Integrated desktop point of sale & retail management system.",
    "footer_founder_tag": "Founder & Product Owner — Gehad Qabel",
    "footer_col_nav": "Navigation",
    "footer_col_security": "Trust & Legal",
    "footer_col_contact": "Contact Support",
    "footer_trust1": "Local Execution",
    "footer_trust2": "Barcode Support",
    "footer_trust3": "Local Backup",
    "footer_trust4": "Daily Z Reports",
    "footer_rights": "© 2026 ZAAD POS. All rights reserved.",
    // LEGAL & PRIVACY / TERMS
    "priv_tag": "Legal & Security Transparency",
    "priv_title": "Privacy Policy",
    "priv_meta": "Effective Date: September 29, 2026 • Official Domain: zaadsystem.com • Contact: support@zaadsystem.com",
    "priv_h1": "1. Overview & Data Ownership",
    "priv_p1": "This Privacy Policy governs the operation of ZAAD POS (zaadsystem.com), developed and maintained by Gehad Qabel. All store transactions, inventory, customer accounts, supplier balances, shift records, and financial summaries remain 100% stored on the local desktop computer hardware.",
    "priv_h2": "2. Local Storage Architecture",
    "priv_p2": "All store data is stored locally in an embedded SQLite database on the store's hard drive. No cloud syncing or external database hosting is required.",
    "priv_h3": "3. Google API & OAuth 2.0 Integration Disclosures",
    "priv_p3": "ZAAD POS offers an optional feature enabling store owners to receive automated Daily Z reports sent directly to their email via Gmail using scope https://www.googleapis.com/auth/gmail.send.",
    "priv_p3_sub": "The Gmail permission is used strictly to compose and dispatch outgoing Daily Z reports. ZAAD POS does NOT read, view, parse, or scan inbox messages. Google authentication tokens are stored locally on the desktop system.",
    "priv_h4": "4. Third-Party Analytics & Tracking",
    "priv_p4": "ZAAD POS does not include third-party tracking scripts, advertising trackers, analytics pixels, or behavioral cookies.",
    "priv_h5": "5. Contact Information",
    "priv_p5": "Support Email: support@zaadsystem.com • Phone/WhatsApp: +20 102 924 7516 • Product Owner: Gehad Qabel",

    "terms_tag": "Terms & License Agreement",
    "terms_title": "Terms of Service",
    "terms_meta": "Effective Date: September 29, 2026 • Official Domain: zaadsystem.com • Contact: support@zaadsystem.com",
    "terms_h1": "1. Acceptance of Terms",
    "terms_p1": "By installing or using ZAAD POS (zaadsystem.com), you agree to these Terms of Service.",
    "terms_h2": "2. Software License & Permitted Use",
    "terms_p2": "ZAAD POS grants a desktop license to operate the software system on authorized store hardware for retail point-of-sale, inventory, shift tracking, and business reporting.",
    "terms_h3": "3. User Responsibilities & Data Backups",
    "terms_p3": "All business data is stored locally on desktop hardware. The store owner is exclusively responsible for hardware security and generating regular external database backups using built-in backup tools.",
    "terms_h4": "4. Limitation of Liability",
    "terms_p4": "To the maximum extent permitted by applicable law, ZAAD POS and developer Gehad Qabel shall not be liable for indirect, incidental, or consequential damages resulting from local hardware failures or data loss.",
    "terms_h5": "5. Contact Information",
    "terms_p5": "Support Email: support@zaadsystem.com • Phone/WhatsApp: +20 102 924 7516 • Product Owner: Eng. Gehad Qabel Ali (Faculty of Computer and Information Sciences Graduate, Ain Shams University)",

  },

  ar: {
    // Brand & General Navigation
    "brand_tagline": "نظام كمبيوتر للمتاجر",
    "nav_home": "الرئيسية",
    "nav_why": "لماذا ZAAD؟",
    "nav_dailyz": "إغلاق اليوم Z",
    "nav_shift": "إدارة الورديات",
    "nav_workflow": "دورة العمل",
    "nav_showcase": "معرض الواجهات",
    "nav_features": "المميزات",
    "nav_security": "الأمان والخصوصية",
    "nav_contact": "تواصل معنا",
    "nav_privacy": "سياسة الخصوصية",
    "nav_terms": "شروط الخدمة",
    "btn_request_demo": "اطلب عرضًا تجريبيًا",
    "btn_explore_features": "استكشف المميزات",
    "btn_back_website": "العودة للموقع",
    "lang_toggle": "English",

    // SECTION 1: HERO
    "hero_eyebrow": "نظام إدارة متكامل للمتاجر",
    "hero_title": "متجرك كله تحت سيطرتك.",
    "hero_title_sub": "من أول Scan للباركود... لحد إغلاق اليوم.",
    "hero_description": "ZAAD POS يجمع البيع والمخزون والورديات والآجل والموردين والجرد وحركة الأموال في نظام كمبيوتر واحد مصمم للسوبرماركت والهايبرماركت ومتاجر التجزئة.",
    "hero_statement": "سريع وقت الزحمة. واضح في الحسابات. وبيانات محلك عندك.",
    "hero_cta_demo": "اطلب عرضًا تجريبيًا",
    "hero_cta_watch": "شاهد النظام أثناء العمل",
    "badge_no_internet": "• يعمل بدون إنترنت",
    "badge_local_storage": "• بياناتك محفوظة محليًا",
    "badge_barcode_thermal": "• باركود وطباعة حرارية",
    "badge_dailyz_auto": "• Daily Z تلقائي",
    "status_shift_open": "الوردية مفتوحة ✓",
    "status_stock_updated": "المخزون محدث لحظيًا ✓",
    "status_dailyz_time": "Daily Z تلقائي — 02:00 AM",
    "status_offline_ready": "يعمل 100% بدون إنترنت",
    "hero_mockup_title": "نظام ZAAD POS — شاشة كاشير البيع المباشر (البلجيكي هايبر ماركت)",
    "hero_mockup_zoom": "اضغط للتكبير واستعراض الشاشة بجودة عالية",

    // SECTION 2: WHY ZAAD
    "why_title": "مش مجرد برنامج كاشير.",
    "why_subtitle_highlight": "ZAAD بيربط شغل المحل كله ببعض.",
    "why_desc": "كل عملية بيع أو شراء أو تحصيل أو مصروف لها أثر واضح على المخزون والحركة المالية وسجل التشغيل.",
    "card1_title": "اعرف فلوس محلك فين",
    "card1_desc": "تابع المبيعات والتحصيلات والمصروفات والموردين وقنوات الدفع من مكان واحد.",
    "card2_title": "المخزون بيتحرك مع شغلك",
    "card2_desc": "بيع، شراء، مرتجع أو جرد — حركة الصنف تفضل مرتبطة بالعملية التي تمت.",
    "card3_title": "كل وردية لها مسؤول",
    "card3_desc": "من العهدة الافتتاحية حتى النقد الفعلي في الدرج والعجز أو الزيادة.",
    "card4_title": "بيانات المحل عندك",
    "card4_desc": "التشغيل الأساسي والبيانات الحساسة محفوظة محليًا على جهاز المتجر.",

    // SECTION 3: DAILY Z
    "dailyz_eyebrow": "من أول اليوم... لآخر جنيه",
    "dailyz_title": "في نهاية اليوم... <span class=\"highlight-text\">اعرف بالضبط إيه اللي حصل.</span>",
    "dailyz_desc": "بدل ما تجمع أرقامك من أكتر من شاشة، ZAAD يلخص حركة اليوم التجاري في Daily Z واحد واضح: الرصيد السابق، ما دخل اليوم، ما خرج اليوم، والموجود الحالي — مع تفاصيل العمليات وقنوات الدفع.",
    "flow_step1": "الباقي من امبارح",
    "flow_step2": "دخل النهارده",
    "flow_step3": "خرج النهارده",
    "flow_step4": "الموجود دلوقتي",
    "dailyz_email_text": "وفي نهاية اليوم؟ التقرير ممكن يوصل للمالك تلقائيًا.",
    "dailyz_email_badge": "📧 إرسال تلقائي عبر Gmail",
    "dailyz_proof_label": "تقرير حقيقي صادر من ZAAD POS",
    "dailyz_page2_label": "تقرير Z اليومي — الصفحة 2",

    // SECTION 4: SHIFT CONTROL
    "shift_eyebrow": "رقابة الوردية",
    "shift_title": "كل وردية محسوبة لآخر جنيه.",
    "shift_subtitle_highlight": "من استلام العهدة... لحد مطابقة الدرج.",
    "shift_desc1": "عند إغلاق الوردية، يجمع ZAAD حركة الكاشير ويحسب النقد المتوقع في الدرج، ثم يقارنه بالمبلغ الفعلي ويظهر المطابقة أو العجز أو الزيادة.",
    "shift_desc2": "وبعد الإغلاق، تفضل الوردية محفوظة في الأرشيف بتاريخها ومسؤولها ومدتها وأرقامها للرجوع إليها وقت الحاجة.",
    "shift_step1_label": "1 — راجع وطابق",
    "shift_tag_expected": "المتوقع في الدرج",
    "shift_tag_actual": "النقد الفعلي",
    "shift_tag_diff": "العجز / الزيادة",
    "shift_trans_badge": "تمت المطابقة ✓ ← تم حفظ الوردية",
    "shift_step2_label": "2 — ارجع لها في أي وقت",
    "shift_modal_title": "إغلاق الوردية وتقفيل الخزينة",
    "shift_archive_title": "أرشيف وسجل الشفتات المقفلة",
    "shift_final_statement": "كل وردية لها مسؤول. وكل فرق له رقم. وكل إغلاق له سجل.",

    // Workflow Section
    "workflow_tag": "دورة التشغيل الكاملة",
    "workflow_title": "مصمم لسرعة وسلاسة العمل في المتاجر",
    "workflow_subtitle": "يربط ZAAD POS كافة مراحل العمل اليومية في السوبرماركت داخل تطبيق كمبيوتر واحد متكامل.",
    "workflow_step1_title": "1. البيع المباشر",
    "workflow_step1_desc": "قراءة فورية بالباركود، بحث سريع في المنتجات، دفع متعدد (كاش، فودافون كاش، إنستا باي، فيزا)، وطباعة فورية للفواتير الحرارية.",
    "workflow_step2_title": "2. التتبع والمخزون",
    "workflow_step2_desc": "خصم تلقائي من المخزن، تتبع حركة الأصناف، حسابات ديون العملاء الآجل، مستحقات الموردين، والمصروفات التشغيلية.",
    "workflow_step3_title": "3. مطابقة الورديات",
    "workflow_step3_desc": "فتح وإغلاق ورديات الكاشير، تسجيل العهدة النقدية الافتتاحية، حساب مدة الوردية، واكتشاف العجز والزيادة بدقة.",
    "workflow_step4_title": "4. التقارير المالية",
    "workflow_step4_desc": "ملخص مالي شامل اليومية (Daily Z) يوضح إجمالي المبيعات، توزيع قنوات الدفع، وتدفقات النقدية المالية، وإرسال التقارير تلقائيًا.",
    "workflow_step5_title": "5. النسخ الاحتياطي",
    "workflow_step5_desc": "نسخ احتياطي محلي لقاعدة البيانات بنقرة واحدة لحماية كافة بيانات المحل واسترجاعها بأمان عند الحاجة.",

    // Showcase Section
    "showcase_tag": "واجهات البرنامج الحقيقية",
    "showcase_title": "استعرض واجهات ZAAD POS الحقيقية",
    "showcase_subtitle": "شاشات حقيقية من داخل نظام ZAAD POS أثناء التشغيل الفعلي في المتاجر.",
    "showcase1_title": "نقطة بيع فائقة السرعة للأوقات المزدحمة",
    "showcase1_desc": "مصممة لإنجاز عمليات البيع بأقصى سرعة ممكنة خلال أوقات الذروة مع دعم كامل لقوارئ الباركود والبحث الفوري.",
    "showcase1_item1": "قراءة باركود فورية وقائمة منتجات مريحة مقسمة بالأقسام",
    "showcase1_item2": "تنوع قنوات الدفع: كاش، فودافون كاش، إنستا باي، فيزا، وحسابات الآجل",
    "showcase1_item3": "حاسبة الباقي للزبون وإتمام الفاتورة بنقرة واحدة أو زر Enter",
    "showcase2_title": "طباعة الفواتير والريبورتات الحرارية",
    "showcase2_desc": "يقوم بإنشاء فواتير حرارية واضحة ومنظمة تمامًا للمقاسات القياسية 58 مم و 80 مم.",
    "showcase2_item1": "طباعة الهيدر باسم المحل، الشعار، رقم الهاتف، والرسالة الترحيبية",
    "showcase2_item2": "جدول تفصيلي يوضح الأصناف، الكمية، السعر، الخصم، ورسوم الخدمات",
    "showcase2_item3": "ربط مباشر بطابعة الفواتير الحرارية مع اختصار سريع للطباعة (Ctrl+P)",
    "showcase3_title": "سجل الفواتير الشامل وتدقيق المبيعات",
    "showcase3_desc": "تسجيل كل عملية بيع في سجل تدقيق قابل للبحث السريع مع تتبع حالات الارتجاع والآجل.",
    "showcase3_item1": "تصفية الفواتير برقم الفاتورة، نطاق التاريخ، أو حالة الدفع",
    "showcase3_item2": "متابعة المبيعات المسددة، المرتجعات الجزئية، وتسديدات الآجل",
    "showcase3_item3": "إعادة طباعة الفاتورة واستعراض تفاصيلها بنقرة واحدة",
    "showcase4_title": "إدارة وتأمين ورديات الكاشير",
    "showcase4_desc": "يحمي إيرادات المحل عبر تنظيم فتح وإغلاق ورديات الكاشير ومطابقة النقدية والدرج.",
    "showcase4_item1": "تحديد مسك الوردية والحساب المستخدم بدقة",
    "showcase4_item2": "عداد زمني لمراقبة مدة الوردية وحالة درج النقدية",
    "showcase4_item3": "قفل حازم للوردية الحالية وأرشيف كامل للورديات المغلقة",

    // Features Section
    "features_tag": "إمكانيات النظام",
    "features_title": "مميزات متكاملة لإدارة السوبرماركت",
    "features_subtitle": "كل ما تحتاجه لإدارة متجرك بأمان وسلاسة وكفاءة عالية.",
    "feat_pos_title": "نقطة البيع (POS)",
    "feat_pos_desc": "قراءة باركود سريعة، بحث في الكتالوج، طرق دفع متعددة، وتقسيم الفاتورة وطباعة حرارية فورية.",
    "feat_inv_title": "إدارة المخزون",
    "feat_inv_desc": "خصم آلي من رصيد المخزن، تتبع حركة الأصناف، تنبيهات نواقص المخزون، وطباعة الباركود.",
    "feat_pur_title": "المشتريات والموردين",
    "feat_pur_desc": "تسجيل فواتير التوريد، تتبع حسابات شركات التوريد، تسديد الديون، وأرشيف المشتريات.",
    "feat_credit_title": "حسابات ديون العملاء",
    "feat_credit_desc": "متابعة حسابات الآجل للعملاء، تسجيل الدفعات الجزئية، وإصدار وصلات سداد الديون.",
    "feat_exp_title": "المصروفات التشغيلية",
    "feat_exp_desc": "تسجيل مصاريف المحل، الفواتير، الصيانة، والنثريات للحفاظ على شفافية الحركة المالية والمصروفات.",
    "feat_count_title": "جرد المخزون الموجه",
    "feat_count_desc": "أداة جرد فعلي للمخزن تحسب الفروقات بين الرصيد الدفتري والفعلي وتسويتها بدقة.",
    "feat_shift_title": "إدارة الورديات",
    "feat_shift_desc": "تنظيم فتح وإغلاق وردية الكاشير، متابعة العهدة الافتتاحية، وزمن تشغيل الوردية.",
    "feat_dailyz_title": "تقارير Daily Z اليومية",
    "feat_dailyz_desc": "تقرير المبيعات المالي لليوم التجاري مع تفنيد قنوات الدفع، المصروفات، والتدفقات المالية.",
    "feat_backup_title": "النسخ الاحتياطي والاسترجاع",
    "feat_backup_desc": "نسخ احتياطي لقاعدة البيانات المحلية لحماية بيانات متجرك واسترجاعها في أي وقت.",
    "feat_email_title": "إرسال التقارير بالإيميل",
    "feat_email_desc": "إمكانية إرسال تقرير Daily Z المالي تلقائيًا لمالك المحل عبر Gmail بخاصية OAuth 2.0.",
    "feat_pay_title": "قنوات دفع متعددة",
    "feat_pay_desc": "دعم كاش، فودافون كاش، إنستا باي، فيزا، وآجل في كل فاتورة بيع.",
    "feat_perm_title": "صلاحيات المستخدمين",
    "feat_perm_desc": "تحديد صلاحيات الكاشير والمدير لمنع التلاعب وتأمين العمليات الحساسة.",

    // Security Section
    "security_tag": "ملكية البيانات والأمان",
    "security_title": "حفظ البيانات محليًا وشفافية الأمان",
    "security_desc": "يضع ZAAD POS سيادة بيانات متجرك في المقام الأول. جميع البيانات الحساسة — المبيعات، المخزون، حسابات العملاء والموردين — تخزن محليًا 100% على جهاز الكمبيوتر الخاص بك.",
    "sec_item1_title": "تحكم محلي كامل في البيانات",
    "sec_item1_desc": "لا يتطلب اشتراك قاعدة بيانات سحابية أو رفع بيانات متجرك على سيرفرات خارجية.",
    "sec_item2_title": "ربط اختياري مع Google OAuth",
    "sec_item2_desc": "يمكن لمالك المحل اختياريًا ربط إيميله لاستلام تقارير Daily Z اليومية تلقائيًا.",
    "sec_item3_title": "لا يتم قراءة الإيميلات أو بيع البيانات",
    "sec_item3_desc": "تستخدم صلاحية Gmail (gmail.send) فقط لإرسال التقرير المالي. لا يقرأ البرنامج ولا يفحص إيميلاتك الشخصية نهائيًا.",
    "sec_box_title": "إشعار توثيق Google API",
    "sec_box_desc": "يطلب ZAAD POS صلاحية Gmail المحدودة حصريًا لإرسال التقارير اليومية للمالك.",
    "sec_box_item1": "الصلاحية المطلوبة: https://www.googleapis.com/auth/gmail.send",
    "sec_box_item2": "بيانات التوثيق تخزن مشفرة محليًا على كمبيوتر المحل",
    "sec_box_item3": "يمكن إلغاء الصلاحية في أي وقت من إعدادات حساب Google",
    "btn_privacy": "قراءة سياسة الخصوصية",
    "btn_terms": "عرض شروط الخدمة",

    // Contact Section
    "contact_tag": "الدعم والتواصل التجاري",
    "contact_title": "تواصل مع فريق ZAAD POS",
    "contact_subtitle": "اطلب عرضًا تجريبيًا أو تواصل مباشرة مع فريق التطوير والدعم الفني.",
    "contact_info_title": "معلومات التواصل",
    "contact_info_desc": "نوفر دعمًا تجاريًا وفنيًا مباشرًا لتشغيل النظام في المتجر.",
    "contact_email_title": "البريد الإلكتروني",
    "contact_phone_title": "الهاتف والواتساب",
    "contact_linkedin_title": "حساب LinkedIn",
    "contact_founder": "تطوير وصيانة: جهاد قابل",
    "contact_form_title": "حجز عرض تجريبي (Demo)",
    "contact_form_desc": "تعرف على كيفية قيام ZAAD POS بتطوير وإدارة متجرك بأعلى كفاءة.",
    "form_store_label": "اسم المحل / السوبرماركت",
    "form_store_ph": "مثال: البلجيكي هايبر ماركت",
    "form_contact_label": "البريد الإلكتروني أو الهاتف",
    "form_contact_ph": "مثال: 010xxxxxxxx أو owner@example.com",
    "form_type_label": "نوع النشاط",
    "form_type_opt1": "سوبرماركت",
    "form_type_opt2": "هايبرماركت",
    "form_type_opt3": "ميني ماركت / بقالة",
    "form_type_opt4": "متجر تجزئة",
    "form_submit": "إرسال طلب العرض التجريبي",

    // Footer & Modals
    "footer_brand_desc": "نظام كمبيوتر عالي الأداء لإدارة نقاط البيع والمتاجر للسوبرماركت والهايبرماركت.",
    "footer_col_nav": "روابط الموقع",
    "footer_col_security": "الأمان والخصوصية",
    "footer_col_contact": "التواصل",
    "footer_rights": "© 2026 ZAAD POS (zaadsystem.com). جميع الحقوق محفوظة. تطوير وصيانة: جهاد قابل.",
    "modal_demo_title": "طلب عرض تجريبي لنظام ZAAD POS",
    "modal_demo_desc": "تواصل معنا عبر البريد الإلكتروني أو الواتساب لتحديد موعد عرض تجريبي مباشر.",
    "modal_demo_wa": "تواصل عبر الواتساب (+20 102 924 7516)",
    "modal_demo_mail": "مراسلة support@zaadsystem.com",

    "nav_accounts": "الآجل والموردين",
    "nav_stocktaking": "جرد المخزون",

    // SECTION: CUSTOMER CREDIT & SUPPLIER ACCOUNTS
    "accounts_eyebrow": "حسابات الآجل والموردين",
    "accounts_title": "كل جنيه ليك... وكل جنيه عليك، معروف راح فين.",
    "accounts_subtitle": "من حساب العميل الآجل إلى مستحقات الموردين، ZAAD يحفظ كل فاتورة ودفعة ومرتجع في سجل واضح بتاريخ العملية ورصيد الحساب.",
    
    // Customer Side
    "acc_customer_title": "فلوسك عند العميل؟ حسابه قدامك بالكامل.",
    "acc_customer_subtitle": "بيع آجل، تحصيلات، مرتجعات وسجل يومي للحركات.",
    "acc_tag_credit_sale": "بيع آجل",
    "acc_tag_collections": "تحصيلات",
    "acc_tag_returns": "مرتجعات",
    "acc_tag_date_filter": "بحث بالتاريخ",
    "acc_customer_caption": "نظام ZAAD POS — شاشة كشف حساب العميل والمديونية",

    // Supplier Side
    "acc_supplier_title": "وعليك فلوس للمورد؟ مش هتضيع وسط الفواتير.",
    "acc_supplier_subtitle": "توريدات، سدادات، مرتجعات ورصيد مستحق في كشف حساب واحد.",
    "acc_tag_shipments": "توريدات",
    "acc_tag_payments": "سدادات",
    "acc_tag_supplier_returns": "مرتجعات",
    "acc_tag_balance_due": "رصيد مستحق",
    "acc_supplier_caption": "نظام ZAAD POS — شاشة كشف حساب وسجل تعاملات المورد",

    // Shared / Closing
    "acc_badge_connector": "كل حركة ← بتاريخها ← ورصيدها ← وتفاصيلها",
    "acc_cust_window_title": "كشف حساب عميل آجل",
    "acc_supp_window_title": "كشف حساب ومستحقات المورد",
    "acc_final_statement": "بدل الدفاتر والحسابات المتفرقة... كل حساب له سجل، وكل حركة لها أثر.",

    // SECTION: INVENTORY COUNT / STOCKTAKING
    "stock_eyebrow": "جرد وتصحيح المخزون",
    "stock_title": "جرد مخزونك... من غير ما تبدأ من الصفر كل مرة.",
    "stock_subtitle": "ابدأ جلسة الجرد وامسح الأصناف بالباركود أو ابحث عنها بالاسم. ZAAD يقارن الكمية الفعلية برصيد النظام لحظيًا ويكشف المطابق، العجز والزيادة قبل اعتماد أي تعديل على المخزون.",
    
    "stock_main_caption": "نظام ZAAD POS — جلسة جرد وتصحيح المخزون المباشرة",
    "stock_result_caption": "نظام ZAAD POS — نتيجة ومجلس تصحيح المخزون النهائي",

    // Callout Blocks
    "stock_callout1_title": "وقفت الجرد؟ ارجع كمّله من حيث توقفت.",
    "stock_callout1_desc": "مسودة الجرد محفوظة ويمكن استكمالها بعد إعادة تشغيل البرنامج.",
    
    "stock_callout2_title": "بتعمل جرد جزئي؟ مش هنلمس باقي المخزون.",
    "stock_callout2_desc": "عند اعتماد الجرد، يتم تصحيح الأصناف التي تم عدّها فقط، وتظل الأصناف غير المعدودة كما هي.",

    // Sequence States
    "stock_state_matching": "مطابق ✓",
    "stock_state_shortage": "فرق بالنقص",
    "stock_state_surplus": "فرق بالزيادة",
    "stock_final_callout": "اعرف الفرق الأول... وصحّح المخزون لما تكون جاهز.",
    "stock_active_window_title": "جلسة الجرد المباشر وتدقيق الأصناف",
    "stock_result_window_title": "محضر تسوية واعتماد فروق الجرد",

    "nav_purchase_receiving": "استلام المشتريات",

    // SECTION: PURCHASE RECEIVING & MULTI-PAYMENT
    "pur_eyebrow": "توريد المشتريات والتحويل التلقائي",
    "pur_title": "استلم بالكرتونة... وخلّي ZAAD يحسب القطع.",
    "pur_subtitle": "حدد طريقة استلام الصنف وعدد القطع داخل العبوة، ثم سجّل عدد العبوات المشتراة. ZAAD يحوّلها تلقائيًا إلى الكمية الفعلية التي تدخل المخزون.",

    "pur_badge_live": "شاهدها وهي بتحصل فعليًا",
    "pur_video_title": "نظام ZAAD POS — استلام فواتير الشراء وتحويل العبوات تلقائيًا",

    // Equation Cards
    "pur_eq_cartons": "2 كرتونة",
    "pur_eq_multiplier": "× 24 قطعة",
    "pur_eq_total": "= 48 قطعة في المخزون",
    "pur_eq_note": "مجرد مثال توضيحي — عدد القطع داخل العبوة يتم تحديده حسب كل صنف.",

    // Flow Steps
    "pur_flow_step1": "استلام البضاعة",
    "pur_flow_step2": "عدد العبوات",
    "pur_flow_step3": "عدد القطع داخل العبوة",
    "pur_flow_step4": "تحويل تلقائي",
    "pur_flow_step5": "تحديث المخزون",

    // Multi-Payment
    "pur_pay_title": "وفاتورة المورد؟ وزّع دفعها بالطريقة اللي حصلت فعلًا.",
    "pur_pay_subtitle": "سجّل مدفوعات فاتورة الشراء على أكثر من وسيلة دفع عند الحاجة، لتطابق الحركة المسجلة ما تم دفعه فعليًا.",
    
    // Supported Payment Methods
    "pur_pay_cash": "كاش",
    "pur_pay_voda": "فودافون كاش",
    "pur_pay_insta": "إنستا باي",
    "pur_pay_visa": "فيزا",
    "pur_pay_debt": "حساب آجل للمورد",

    // Final Line
    "pur_final_statement": "من استلام الكرتونة... لحد دخول آخر قطعة للمخزون، الحساب على ZAAD.",

    "nav_backup": "النسخ الاحتياطي",

    // SECTION 8: BACKUP & RESTORE
    "backup_eyebrow": "أمان البيانات واستمرارية العمل",
    "backup_title": "سنين شغلك ما تضيعش بسبب مشكلة في الجهاز.",
    "backup_subtitle": "ZAAD POS يساعدك على حماية بيانات متجرك من خلال النسخ الاحتياطي التلقائي، مع إمكانية إنشاء نسخة يدوية واسترجاع بياناتك عند الحاجة.",
    "backup_badge_trust": "بيانات متجرك تستحق خطة رجوع.",
    "backup_statement": "نسخ تلقائي + يدوي + خيارات استرجاع واضحة.",
    "backup_modal_caption": "نظام ZAAD POS — شاشة النسخ الاحتياطي واستعادة البيانات التلقائية",

    // Backup Callouts
    "backup_tag_auto": "نسخ تلقائي",
    "backup_tag_manual": "نسخة يدوية عند الحاجة",
    "backup_tag_latest": "استرجاع أحدث نسخة",
    "backup_tag_file": "استعادة من ملف",

    // SECTION 9: COMPACT FEATURE MATRIX
    "matrix_eyebrow": "منظومة التشغيل الكاملة",
    "matrix_title": "كل الأدوات التي يحتاجها متجرك",
    "matrix_subtitle": "من نقطة البيع إلى التقارير والنسخ الاحتياطي — أدوات التشغيل الأساسية في نظام واحد.",

    "matrix_item1_title": "نقطة البيع POS",
    "matrix_item1_sub": "بيع سريع وطباعة فواتير حرارية",
    "matrix_item2_title": "المخزون",
    "matrix_item2_sub": "خصم تلقائي وتتبع حركة الأصناف",
    "matrix_item3_title": "المشتريات",
    "matrix_item3_sub": "تحويل العبوات وفواتير الموردين",
    "matrix_item4_title": "العملاء والآجل",
    "matrix_item4_sub": "سجل المديونيات وتسديد الحسابات",
    "matrix_item5_title": "الموردين",
    "matrix_item5_sub": "تتبع التوريدات ومستحقات الموردين",
    "matrix_item6_title": "المرتجعات",
    "matrix_item6_sub": "سجل المرتجعات وتسوية الفواتير",
    "matrix_item7_title": "المصروفات",
    "matrix_item7_sub": "تسجيل مصاريف المحل والمسحوبات",
    "matrix_item8_title": "جرد المخزون",
    "matrix_item8_sub": "حساب العجز والزيادة ومجلس التصحيح",
    "matrix_item9_title": "الورديات",
    "matrix_item9_sub": "عهدة الكاشير ومطابقة الدرج",
    "matrix_item10_title": "التقارير Z",
    "matrix_item10_sub": "ملخص اليوم التجاري والتصنيفات",
    "matrix_item11_title": "النسخ الاحتياطي",
    "matrix_item11_sub": "حفظ واسترجاع البيانات بضغطة زر",
    "matrix_item12_title": "الصلاحيات",
    "matrix_item12_sub": "تحديد صلاحيات أدوار فريق العمل",

    // SECTION 10: SECURITY & PRIVACY
    "sec_eyebrow": "ملكية البيانات والأمان",
    "sec_title": "بيانات متجرك تفضل تحت سيطرتك.",
    "sec_subtitle": "بيانات التشغيل الأساسية للمتجر محفوظة محليًا على جهازك.",
    "sec_subtext": "لا يحتاج التشغيل الأساسي إلى قاعدة بيانات سحابية أو اتصال دائم بالإنترنت.",
    
    "sec_point1": "تشغيل محلي 100%",
    "sec_point2": "لا يعتمد التشغيل الأساسي على الإنترنت",
    "sec_point3": "بيانات التشغيل الأساسية على جهازك",

    "sec_gmail_title": "ربط Gmail اختياري",
    "sec_gmail_badge": "اختياري",
    "sec_gmail_desc": "يستخدم ZAAD POS صلاحية gmail.send لإرسال التقارير عند تفعيل الخاصية، ولا يستخدم هذه الصلاحية لقراءة صندوق البريد.",

    // SECTION 11: FINAL DEMO & CONVERSION CTA
    "cta_eyebrow": "عرض تجريبي مباشر",
    "cta_title": "شوف ZAAD POS على شغل محلك بنفسك",
    "cta_subtitle": "احجز عرضًا تجريبيًا وشاهد دورة البيع والمخزون والورديات والتقارير أمامك.",
    "cta_btn_primary": "اطلب Demo",
    "cta_btn_wa": "تواصل على WhatsApp",

    // Floating WhatsApp & Founder Trust Strip & Footer Details
    "float_wa_label": "تواصل معنا على WhatsApp",
    "founder_badge": "رؤية عملية لتشغيل المتاجر",
    "founder_headline": "صُنع لتبسيط تشغيل المتاجر اليومية",
    "founder_message": "\"وراء ZAAD POS رؤية واحدة: بناء نظام عملي يساعد أصحاب المتاجر على متابعة البيع، المخزون، الورديات، وحركة الأموال من مكان واحد.\"",
    "founder_subline": "من البيع والمخزون إلى الورديات والتقارير.",
    "founder_title": "Founder & Product Owner — ZAAD POS",
    "founder_verified_tag": "المؤسس",
    "founder_direct_btn": "تواصل مع المؤسس",
    "footer_brand_desc": "نظام كمبيوتر متكامل لإدارة متاجر التجزئة.",
    "footer_founder_tag": "Founder & Product Owner — Gehad Qabel",
    "footer_col_nav": "روابط الموقع",
    "footer_col_security": "الأمان والخصوصية",
    "footer_col_contact": "الدعم والتواصل",
    "footer_trust1": "تشغيل محلي",
    "footer_trust2": "دعم الباركود",
    "footer_trust3": "نسخ احتياطي",
    "footer_trust4": "تقارير تشغيلية",
    "footer_rights": "© 2026 ZAAD POS. جميع الحقوق محفوظة.",
    // LEGAL & PRIVACY / TERMS
    "priv_tag": "الشفافية القانونية والأمان",
    "priv_title": "سياسة الخصوصية",
    "priv_meta": "تاريخ السريان: 29 سبتمبر 2026 • النطاق الرسمي: zaadsystem.com • التواصل: support@zaadsystem.com",
    "priv_h1": "1. نظرة عامة وملكية البيانات",
    "priv_p1": "تحكم سياسة الخصوصية هذه عمل برنامج ZAAD POS (zaadsystem.com)، المطوّر والمملوك بواسطة جهاد قابل. تظل جميع معاملات المتجر والمخزون وحسابات العملاء والموردين وسجلات الورديات والملخصات المالية مخزنة بنسبة 100% محلياً على جهاز الكمبيوتر الخاص بك.",
    "priv_h2": "2. بنية التخزين المحلي",
    "priv_p2": "يتم تخزين كافة بيانات المتجر محلياً داخل قاعدة بيانات SQLite مدمجة على القرص الصلب للمتجر. لا يلزم أي مزامنة سحابية أو استضافة خوادم خارجية لتشغيل المحل.",
    "priv_h3": "3. إفصاحات الربط بـ Google API و OAuth 2.0",
    "priv_p3": "يوفر ZAAD POS ميزة اختيارية تتيح لمالكي المتاجر تلقي تقارير Z اليومية المؤتمتة مباشرة عبر البريد الإلكتروني باستخدام نطاق الصلاحية https://www.googleapis.com/auth/gmail.send.",
    "priv_p3_sub": "تُستخدم صلاحية Gmail حصرياً لإنشاء وإرسال تقارير Z اليومية الصادرة فقط. لا يقوم ZAAD POS بقراءة أو مسح أو فحص محتويات صندوق الوارد نهائياً. يتم تخزين رموز اعتماد Google محلياً على القرص الصلب لجهازك فقط.",
    "priv_h4": "4. التحليلات والتتبع الخارجي",
    "priv_p4": "لا يتضمن نظام ZAAD POS أي برمجيات تتبع تابعة لجهات خارجية أو متتبعات إعلانية أو بكسلات تتبع أو ملفات تعريف ارتباط سلوكية.",
    "priv_h5": "5. معلومات الاتصال والتواصل",
    "priv_p5": "البريد الإلكتروني للدعم: support@zaadsystem.com • الهاتف / واتساب: +20 102 924 7516 • المالك ومطور النظام: جهاد قابل",

    "terms_tag": "شروط الاستخدام واتفاقية الترخيص",
    "terms_title": "شروط الخدمة",
    "terms_meta": "تاريخ السريان: 29 سبتمبر 2026 • النطاق الرسمي: zaadsystem.com • التواصل: support@zaadsystem.com",
    "terms_h1": "1. قبول الشروط",
    "terms_p1": "بتثبيت برنامج ZAAD POS أو استخدامه، فإنك توافق على الالتزام بشروط الخدمة هذه.",
    "terms_h2": "2. ترخيص البرنامج والاستخدام المصرح به",
    "terms_p2": "يمنح ZAAD POS ترخيصاً مكتبياً لتشغيل النظام على أجهزة نقاط البيع المصرح بها لإدارة مبيعات التجزئة، المخزون، الورديات، والتقارير المالية للمتجر.",
    "terms_h3": "3. مسؤوليات المستخدم والنسخ الاحتياطي",
    "terms_p3": "يتم تخزين كافة البيانات محلياً على القرص الصلب للجهاز. يتحمل مالك المتجر مسؤولية تأمين الجهاز واستخراج نسخ احتياطية خارجية دورية باستخدام أدوات النسخ المدمجة بالنظام.",
    "terms_h4": "4. حدود المسؤولية",
    "terms_p4": "إلى أقصى حد يسمح به القانون المعمول به، لا يتحمل ZAAD POS أو مطور النظام أي مسؤولية عن أي أضرار غير مباشرة أو تبعية ناتجة عن أعطال العتاد الصلب المحلي أو فقدان البيانات غير المنسوخة.",
    "terms_h5": "5. معلومات الاتصال والدعم",
    "terms_p5": "البريد الإلكتروني للدعم: support@zaadsystem.com • الهاتف / واتساب: +20 102 924 7516 • مالك المنتج: البشمهندسة جهاد قابيل علي (خريجة حاسبات ومعلومات جامعة عين شمس)",

  }
};

// Global i18n Controller
class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('zaad-lang') || this.detectBrowserLang();
    this.init();
  }

  detectBrowserLang() {
    const lang = navigator.language || navigator.userLanguage || 'ar';
    return lang.toLowerCase().startsWith('ar') ? 'ar' : 'en';
  }

  init() {
    this.setLanguage(this.currentLang);
    this.bindEvents();
  }

  setLanguage(lang) {
    if (!translations[lang]) lang = 'ar';
    this.currentLang = lang;
    localStorage.setItem('zaad-lang', lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update i18n text content elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update i18n input placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    // Update language toggle button text
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
      btn.innerHTML = `<span style="font-weight:700;">${lang === 'ar' ? 'EN' : 'عربي'}</span>`;
      btn.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التحويل للعربية');
    });
  }

  toggleLanguage() {
    const newLang = this.currentLang === 'ar' ? 'en' : 'ar';
    this.setLanguage(newLang);
  }

  bindEvents() {
    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => this.toggleLanguage());
    });
  }
}

// Instantiate globally
window.i18n = new I18nManager();
