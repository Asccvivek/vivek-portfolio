# PROJECT CASE STUDIES — VIVEK DEBNATH

---

## CASE STUDY 1: ELECTRIC DADA

### Location-Based Electrical Service & Product Marketplace

---

**Category:** Service Marketplace | Multi-Vendor Platform
**Industry:** Home Services / Electrical
**Role:** Product & Operations Lead
**Scope:** Full-stack marketplace ecosystem

---

### THE CHALLENGE

The electrical services industry operates in a fragmented, unorganized manner — consumers struggle to find reliable electricians, electrical shops lack digital presence, and service providers have no structured platform for managing bookings and operations. The challenge was to design a comprehensive marketplace ecosystem that connects all three stakeholders through a unified, location-aware platform.

---

### MY APPROACH

**Phase 1: Ecosystem Mapping**
- Identified three core stakeholder groups: Consumers, Electricians, and Electrical Shop Owners
- Mapped user journeys for each stakeholder from discovery to transaction completion
- Defined operational workflows for service booking, product discovery, and delivery coordination

**Phase 2: Architecture Planning**
- Designed 3-tier dashboard architecture with role-based access control
- Planned location-based discovery algorithms for service provider matching
- Architected product comparison engine with multi-vendor pricing logic
- Developed delivery charge calculation system based on distance and product weight

**Phase 3: Operational Workflow Design**
- Created service booking workflow with real-time availability management
- Designed shop owner inventory management and product listing systems
- Planned admin oversight dashboard for marketplace health monitoring
- Integrated AI-assisted workflow planning for operational optimization

**Phase 4: Coordination & Execution**
- Coordinated cross-functional requirements across UI/UX, backend, and business teams
- Established sprint-based delivery cadence with milestone tracking
- Managed stakeholder communication and feedback integration loops

---

### KEY FEATURES DELIVERED

| Feature | Description |
|---------|-------------|
| Electrician Booking | Real-time availability, location matching, service categorization |
| Shop Discovery | Location-based electrical shop finder with product catalogs |
| Product Comparison | Multi-vendor price comparison with specifications |
| Delivery Logic | Distance-based delivery charge calculation and tracking |
| Admin Dashboard | Marketplace analytics, user management, dispute resolution |
| Electrician Dashboard | Job management, earnings tracking, availability control |
| Shop Owner Dashboard | Inventory management, order processing, analytics |
| Service Workflows | End-to-end booking lifecycle management |

---

### OPERATIONAL ARCHITECTURE

```
┌─────────────────────────────────────────────────────────┐
│                    ADMIN DASHBOARD                        │
│  (Analytics, User Mgmt, Disputes, Marketplace Health)    │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   CONSUMER   │  │  ELECTRICIAN │  │  SHOP OWNER  │  │
│  │     APP      │  │  DASHBOARD   │  │  DASHBOARD   │  │
│  ├──────────────┤  ├──────────────┤  ├──────────────┤  │
│  │• Search      │  │• Job Queue   │  │• Inventory   │  │
│  │• Book Service│  │• Earnings    │  │• Orders      │  │
│  │• Shop Browse │  │• Schedule    │  │• Products    │  │
│  │• Compare     │  │• Reviews     │  │• Analytics   │  │
│  │• Track Order │  │• Profile     │  │• Delivery    │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                          │
├─────────────────────────────────────────────────────────┤
│              CORE PLATFORM SERVICES                       │
│  Location Engine | Payment | Notifications | Analytics   │
└─────────────────────────────────────────────────────────┘
```

---

### IMPACT & OUTCOMES

- Designed a scalable marketplace architecture supporting 3 distinct user roles
- Created operational workflows reducing service booking friction by streamlining the discovery-to-booking pipeline
- Established dashboard systems providing real-time operational visibility for all stakeholders
- Planned AI-assisted features for intelligent service provider matching and demand prediction

---

### SKILLS DEMONSTRATED

`Marketplace Architecture` `Multi-Dashboard Design` `Location Services` `Product Operations` `Stakeholder Coordination` `AI Workflow Planning` `Delivery Systems` `Operational Design`

---
---

## CASE STUDY 2: E-RESTRO

### Restaurant Management & Operations Platform

---

**Category:** SaaS Platform | Operations Management
**Industry:** Hospitality / Food & Beverage
**Role:** Operations Coordinator & Systems Analyst
**Scope:** Full restaurant operations ecosystem

---

### THE CHALLENGE

Restaurant operations involve complex interdependencies — inventory management, order processing, table management, kitchen coordination, and financial reporting must all work in harmony. The challenge was to coordinate the development of a unified platform that brings operational clarity to every aspect of restaurant management.

---

### MY APPROACH

**Phase 1: Operational Analysis**
- Studied restaurant workflow patterns from order placement to kitchen execution to billing
- Identified pain points in inventory tracking, waste management, and reporting accuracy
- Mapped integration points between front-of-house and back-of-house operations

**Phase 2: System Architecture Coordination**
- Coordinated modular system design with independent yet integrated modules
- Planned real-time data flow between inventory, orders, and reporting systems
- Designed QR-based table management for contactless ordering workflows
- Architected KOT (Kitchen Order Ticket) printing integration for kitchen coordination

**Phase 3: Reporting & Analytics Framework**
- Designed multi-level reporting dashboards (daily, weekly, monthly, custom)
- Planned ingredient-level cost tracking for profit margin analysis
- Created operational KPI frameworks for restaurant performance monitoring

---

### KEY FEATURES DELIVERED

| Module | Capabilities |
|--------|-------------|
| Inventory Management | Real-time stock tracking, low-stock alerts, supplier management |
| Customer Module | Customer profiles, order history, loyalty tracking |
| QR/Table Management | QR-based ordering, table status tracking, reservation system |
| Reporting Dashboards | Revenue analytics, cost analysis, performance metrics |
| KOT Integration | Kitchen order routing, preparation tracking, priority management |
| Ingredient Management | Recipe costing, waste tracking, procurement planning |
| Admin Workflows | Staff management, role permissions, operational controls |

---

### OPERATIONAL WORKFLOW

```
Customer Order → QR Scan/Manual Entry
        ↓
Order Processing → Table Assignment
        ↓
KOT Generation → Kitchen Display/Print
        ↓
Preparation Tracking → Status Updates
        ↓
Service & Delivery → Table/Takeaway
        ↓
Billing & Payment → Invoice Generation
        ↓
Analytics Update → Real-time Dashboard Refresh
        ↓
Inventory Deduction → Stock Level Update
```

---

### IMPACT & OUTCOMES

- Coordinated development of integrated restaurant management ecosystem
- Designed reporting frameworks providing real-time operational visibility
- Planned inventory systems enabling ingredient-level cost tracking and waste reduction
- Established QR-based workflows modernizing front-of-house operations

---

### SKILLS DEMONSTRATED

`SaaS Operations` `Inventory Systems` `Reporting & Analytics` `QR Integration` `KOT Systems` `Workflow Design` `Restaurant Tech` `Operational Coordination`

---
---

## CASE STUDY 3: RURAL RIDE BOOKING PLATFORM

### Local Transport & Mobility Startup Concept

---

**Category:** Startup Concept | Mobility Platform
**Industry:** Transportation / Rural Mobility
**Role:** Startup Strategist & Product Planner
**Scope:** MVP concept and architecture planning

---

### THE CHALLENGE

Rural and semi-urban areas face significant transportation gaps — auto-rickshaws and tuk-tuks operate without digital infrastructure, making it difficult for passengers to find rides and for drivers to optimize their routes and earnings. The challenge was to conceptualize a ride-booking platform tailored to the unique dynamics of rural transport ecosystems.

---

### MY APPROACH

**Phase 1: Market Understanding**
- Analyzed rural transport patterns and passenger behavior
- Identified key differences from urban ride-hailing (fixed routes, shared rides, fare negotiation)
- Mapped stakeholder needs: passengers, drivers, and local transport operators

**Phase 2: Platform Conceptualization**
- Designed booking workflow optimized for low-bandwidth environments
- Planned fare calculation system accounting for rural pricing dynamics
- Conceptualized shared-ride matching for common routes
- Designed driver onboarding flow for non-tech-savvy operators

**Phase 3: Scalability Planning**
- Planned phased rollout strategy (single town → district → region)
- Designed lightweight architecture for low-resource deployment
- Conceptualized offline-first features for areas with intermittent connectivity

---

### PLATFORM CONCEPT

```
┌─────────────────────────────────────┐
│         PASSENGER APP               │
│  • Book Ride (Auto/Tuk-tuk)        │
│  • View Available Drivers           │
│  • Fare Estimate                    │
│  • Ride Tracking                    │
│  • Payment (Cash/Digital)           │
├─────────────────────────────────────┤
│         DRIVER APP                  │
│  • Accept/Reject Rides              │
│  • Route Navigation                 │
│  • Earnings Dashboard               │
│  • Availability Toggle              │
├─────────────────────────────────────┤
│         ADMIN PANEL                 │
│  • Driver Management                │
│  • Ride Analytics                   │
│  • Fare Configuration               │
│  • Area/Zone Management             │
└─────────────────────────────────────┘
```

---

### IMPACT & OUTCOMES

- Conceptualized a viable mobility solution for underserved rural markets
- Designed platform architecture accounting for infrastructure limitations
- Planned go-to-market strategy with phased geographic expansion
- Created operational framework adaptable to diverse rural transport ecosystems

---

### SKILLS DEMONSTRATED

`Startup Strategy` `MVP Planning` `Market Analysis` `Platform Architecture` `Go-to-Market` `Rural Tech` `Mobility Systems` `Product Conceptualization`

---
---

## CASE STUDY 4: SERVICE PLATFORM PORTFOLIO

### Salonix | Homecare | 1 Tom Plumber | Electrical Service App

---

**Category:** Service Booking Platforms
**Industry:** Home Services / Healthcare / Beauty
**Role:** Product Coordinator & Operations Planner
**Scope:** Multi-platform service ecosystem

---

### OVERVIEW

Coordinated the planning and operational design of multiple service booking platforms, each addressing a specific vertical while sharing common architectural patterns — appointment scheduling, service provider management, customer booking flows, and operational dashboards.

---

### COMMON ARCHITECTURE PATTERN

```
┌─────────────────────────────────────────┐
│           CUSTOMER INTERFACE             │
│  Search → Select → Book → Track → Rate  │
├─────────────────────────────────────────┤
│         SERVICE PROVIDER PANEL          │
│  Availability → Accept → Execute → Earn │
├─────────────────────────────────────────┤
│            ADMIN DASHBOARD              │
│  Monitor → Manage → Report → Optimize   │
└─────────────────────────────────────────┘
```

### Platform-Specific Contributions:

**Salonix (Salon Booking)**
- Designed appointment scheduling with time-slot management
- Planned service catalog with pricing and duration metadata
- Coordinated customer booking flow optimization

**Homecare (Healthcare Services)**
- Planned healthcare service workflows with compliance considerations
- Designed provider credential verification systems
- Coordinated patient-provider matching logic

**1 Tom Plumber (Plumbing Services)**
- Designed emergency vs. scheduled service booking differentiation
- Planned service area management and provider routing
- Coordinated pricing estimation workflows

**Electrical Service App (Urban Company-style)**
- Architected electrician marketplace with skill-based matching
- Designed service provider rating and quality management systems
- Planned multi-category service coordination

---

### SKILLS DEMONSTRATED

`Service Platform Design` `Booking Systems` `Multi-Platform Coordination` `Healthcare Operations` `Provider Management` `Scheduling Systems` `Quality Frameworks`

---
---

## CASE STUDY 5: BUSINESS OPERATIONS PLATFORMS

### Synergy Tech | Tradewinds | Tradefixa | LegalMark | Elite Works

---

**Category:** Business Operations & Workflow Platforms
**Industry:** Technology / Trade / Legal / Contracting
**Role:** Operations Coordinator
**Scope:** Business workflow systems

---

### OVERVIEW

Coordinated operational planning and workflow design for multiple business-focused platforms, each serving distinct industry verticals while requiring common operational infrastructure — workflow management, reporting systems, stakeholder coordination, and process automation.

---

### CONTRIBUTIONS ACROSS PLATFORMS

| Platform | Industry | Key Contribution |
|----------|----------|-----------------|
| Synergy Tech | Technology | Business operations workflow design |
| Tradewinds | Trade/Commerce | Operational process coordination |
| Tradefixa | Service Management | Trade/service workflow planning |
| LegalMark | Legal Tech | Legal process digitization planning |
| Elite Works | Electrical Contracting | Contractor operations management |

---

### COMMON OPERATIONAL PATTERNS DESIGNED

1. **Workflow Automation** — Designed repeatable process flows reducing manual intervention
2. **Reporting Frameworks** — Created standardized reporting structures across platforms
3. **Stakeholder Management** — Planned multi-role access and communication systems
4. **Operational Dashboards** — Designed real-time monitoring and KPI tracking interfaces
5. **Process Documentation** — Established SOPs and operational guidelines

---

### SKILLS DEMONSTRATED

`Business Operations` `Workflow Design` `Multi-Industry Experience` `Process Optimization` `Reporting Systems` `Stakeholder Management` `Operational Planning`
