/* ==========================================================================
   ZAAD POS - Internationalization (i18n) Engine & Translations Dictionary
   Supports English (LTR) and Arabic (RTL) seamlessly across all pages.
   ========================================================================== */

const translations = {
  en: {
    // Brand & General
    "brand_tagline": "DESKTOP RETAIL",
    "nav_home": "Home",
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

    // Hero Section
    "hero_tag": "Desktop Retail & Supermarket Management",
    "hero_title": "Retail Management. Built to Run the Store.",
    "hero_subtitle": "ZAAD POS is a commercial desktop point-of-sale and retail management system engineered for supermarkets, hypermarkets, and modern retail operations. Fast checkout, local data control, cashier shift reconciliation, and Daily Z financial reporting.",
    "badge_desktop": "Desktop-First Performance",
    "badge_local_data": "100% Local Data Control",
    "badge_daily_z": "Daily Z Reporting",
    "badge_inventory": "Real-time Inventory Control",
    "hero_mockup_title": "ZAAD POS System — Point of Sale Checkout (Al-Belgiky Hypermarket)",
    "hero_mockup_zoom": "Click to Expand High-Resolution Screenshot",

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
    "feat_dailyz_desc": "Authoritative business-day reports summarizing total sales, payment channel breakdown, expenses, and net profit.",
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

    // Privacy Policy Page
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

    // Terms of Service Page
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
    "terms_p5": "Support Email: support@zaadsystem.com • Phone/WhatsApp: +20 102 924 7516 • Product Owner: Gehad Qabel"
  },

  ar: {
    // Brand & General
    "brand_tagline": "نظام كمبيوتر للمتاجر",
    "nav_home": "الرئيسية",
    "nav_workflow": "دورة العمل",
    "nav_showcase": "معرض الواجهات",
    "nav_features": "المميزات",
    "nav_security": "الأمان والخصوصية",
    "nav_contact": "التواصل والطلب",
    "nav_privacy": "سياسة الخصوصية",
    "nav_terms": "شروط الخدمة",
    "btn_request_demo": "اطلب عرضًا تجريبيًا",
    "btn_explore_features": "استكشف المميزات",
    "btn_back_website": "العودة للموقع",
    "lang_toggle": "English",

    // Hero Section
    "hero_tag": "إدارة متكاملة للسوبرماركت والهايبرماركت",
    "hero_title": "إدارة متكاملة للتجزئة.. مصممة لتشغيل متجرك",
    "hero_subtitle": "نظام ZAAD POS هو برنامج كمبيوتر تجاري مخصص لإدارة السوبرماركت، الهايبرماركت ومتاجر التجزئة الحديثة. بيع سريع بالباركود، حماية كاملة لبياناتك محليًا، ضبط ورديات الكاشير، وتقارير إغلاق يومية دقيقة (Daily Z).",
    "badge_desktop": "أداء قوي على الكمبيوتر",
    "badge_local_data": "تحكم محلي كامل في بياناتك",
    "badge_daily_z": "تقارير إغلاق يومية دقيقة",
    "badge_inventory": "متابعة فورية للمخزون",
    "hero_mockup_title": "نظام ZAAD POS — شاشة كاشير البيع المباشر (البلجيكي هايبر ماركت)",
    "hero_mockup_zoom": "اضغط للتكبير واستعراض الشاشة بجودة عالية",

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
    "workflow_step4_desc": "ملخص مالى شامل اليومية (Daily Z) يوضح إجمالي المبيعات، توزيع قنوات الدفع، صافي الأرباح، وإرسال التقارير تلقائيًا.",
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
    "feat_exp_desc": "تسجيل مصاريف المحل، الفواتير، الصيانة، والنثريات للحفاظ على شفافية الأرباح والمالية.",
    "feat_count_title": "جرد المخزون الموجه",
    "feat_count_desc": "أداة جرد فعلي للمخزن تحسب الفروقات بين الرصيد الدفتري والفعلي وتسويتها بدقة.",
    "feat_shift_title": "إدارة الورديات",
    "feat_shift_desc": "تنظيم فتح وإغلاق وردية الكاشير، متابعة العهدة الافتتاحية، وزمن تشغيل الوردية.",
    "feat_dailyz_title": "تقارير Daily Z اليومية",
    "feat_dailyz_desc": "تقرير المبيعات المالي لليوم التجاري مع تفنيد قنوات الدفع، المصروفات، وصافي الأرباح.",
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

    // Privacy Policy Page
    "priv_tag": "الشفافية والأمان القانوني",
    "priv_title": "سياسة الخصوصية",
    "priv_meta": "تاريخ السريان: 29 سبتمبر 2026 • النطاق الرسمي: zaadsystem.com • التواصل: support@zaadsystem.com",
    "priv_h1": "1. نظرة عامة وملكية البيانات",
    "priv_p1": "تحدد سياسة الخصوصية هذه قواعد استخدام نظام ZAAD POS (المتاح على zaadsystem.com)، والمطور بواسطة جهاد قابل. تخزن كافة بيانات المبيعات والمخزون وحسابات الديون والورديات محليًا بنسبة 100% على جهاز الكمبيوتر الخاص بالمتجر.",
    "priv_h2": "2. هيكلية التخزين المحلي",
    "priv_p2": "تخزن جميع بيانات المتجر محليًا في قاعدة بيانات SQLite مدمجة على القرص الصلب للمحل، دون أي مزامنة سحابية إجبارية أو استضافة خارجية.",
    "priv_h3": "3. إفصاحات ربط Google API & OAuth 2.0",
    "priv_p3": "يوفر ZAAD POS ميزة اختيارية لمالكي المتاجر لاستلام تقارير Daily Z اليومية عبر Gmail باستخدام الصلاحية https://www.googleapis.com/auth/gmail.send.",
    "priv_p3_sub": "تستخدم صلاحية Gmail فقط لإنشاء وإرسال التقارير المالية اليومية. لا يقرأ البرنامج ولا يفحص الإيميلات الشخصية نهائيًا. وتخزن رموز التوثيق مشفرة محليًا على الجهاز.",
    "priv_h4": "4. عدم تتبع أو بيع البيانات",
    "priv_p4": "لا يحتوي ZAAD POS على أي أدوات تتبع خارجية أو ملفات تعريف ارتباط للإعلانات ولا يتم بيع أو مشاركة أي بيانات مع أي طرف ثالث.",
    "priv_h5": "5. معلومات التواصل",
    "priv_p5": "البريد الإلكتروني: support@zaadsystem.com • الهاتف/الواتساب: +20 102 924 7516 • المالك والتطوير: جهاد قابل",

    // Terms of Service Page
    "terms_tag": "الشروط واتفاقية الترخيص",
    "terms_title": "شروط الخدمة",
    "terms_meta": "تاريخ السريان: 29 سبتمبر 2026 • النطاق الرسمي: zaadsystem.com • التواصل: support@zaadsystem.com",
    "terms_h1": "1. القبول بالشروط",
    "terms_p1": "بثبيت أو استخدام ZAAD POS (zaadsystem.com)، فإنك توافق على الالتزام بشروط الخدمة هذه.",
    "terms_h2": "2. ترخيص الاستخدام المسموح",
    "terms_p2": "يمنح ZAAD POS ترخيصًا مكتبيًا لتشغيل النظام على أجهزة المحل المعتمدة لأغراض البيع، إدارة المخزون، متابعة الورديات، والتقارير المالية.",
    "terms_h3": "3. مسؤولية المستخدم والنسخ الاحتياطي",
    "terms_p3": "تخزن جميع البيانات محليًا على كمبيوتر المحل. يتحمل مالك المتجر المسؤولية الكاملة عن أمان الجهاز وإنشاء النسخ الاحتياطية الدورية لقاعدة البيانات.",
    "terms_h4": "4. حدود المسؤولية",
    "terms_p4": "إلى الأقصى الذي يسمح به القانون، لا يتحمل نظام ZAAD POS أو المطور جهاد قابل أي مسؤولية عن أي أضرار غير مباشرة أو فقدان بيانات ناتج عن أعطال الأجهزة المحلية.",
    "terms_h5": "5. معلومات التواصل",
    "terms_p5": "البريد الإلكتروني: support@zaadsystem.com • الهاتف/الواتساب: +20 102 924 7516 • المالك والتطوير: جهاد قابل"
  }
};

// Global i18n Controller
class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('zaad-lang') || this.detectBrowserLang();
    this.init();
  }

  detectBrowserLang() {
    const lang = navigator.language || navigator.userLanguage || 'en';
    return lang.toLowerCase().startsWith('ar') ? 'ar' : 'en';
  }

  init() {
    this.setLanguage(this.currentLang);
    this.bindEvents();
  }

  setLanguage(lang) {
    if (!translations[lang]) lang = 'en';
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
