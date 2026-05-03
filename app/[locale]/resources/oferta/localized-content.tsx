"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { ReactNode, useState } from "react";
import { Link } from "@/i18n/navigation";

type OfertaSection = {
    title: string;
    paragraphs: string[];
};

function getCurrentDateEn() {
    const now = new Date();
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    return `${month} ${day}, ${year}`;
}

const detailedSectionContents: Record<number, ReactNode> = {
    0: (
        <div className="space-y-6 text-left">
            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    1.1. Legal Status of This Offer
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>1.1.1.</strong> This public offer (hereinafter
                        referred to as the &ldquo;Offer&rdquo;) constitutes an
                        official proposal by MODME Limited Liability Company
                        (TIN 307442900), hereinafter referred to as the
                        &ldquo;Contractor&rdquo;) to legal entities and
                        individual entrepreneurs to enter into a contract for
                        the provision of paid services granting access to the
                        &ldquo;modme.uz&rdquo; software under the SaaS (Software
                        as a Service) model, on the terms set forth in this
                        Offer.
                    </p>
                    <p>
                        <strong>1.1.2.</strong> This Offer constitutes a
                        proposal to enter into a contract containing all the
                        essential terms of the contract for the provision of
                        paid services. The contract is concluded by accepting
                        this Offer without signing a written copy of the
                        contract.
                    </p>
                    <p>
                        <strong>1.1.3.</strong> If you wish to enter into a
                        written contract on individual terms, please contact a
                        manager via the feedback form located on the
                        Contractor&rsquo;s Website:{" "}
                        <a
                            href="https://modme.uz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ff8000] hover:underline"
                        >
                            https://modme.uz
                        </a>
                    </p>
                    <p>
                        <strong>1.1.4.</strong> This Offer is intended
                        exclusively for professional (business) use and does not
                        apply to individual consumers.
                    </p>
                    <p>
                        <strong>1.1.5.</strong> In accordance with Article 370
                        of the Civil Code of the Republic of Uzbekistan
                        (hereinafter &ndash; the Civil Code of the Republic of
                        Uzbekistan), upon acceptance of the terms set forth
                        below and completion of the acceptance, the person
                        accepting this Offer becomes the
                        &ldquo;CUSTOMER.&rdquo;
                    </p>
                    <p>
                        <strong>1.1.6.</strong> A contract concluded through the
                        acceptance of this Offer in electronic form is deemed to
                        have been concluded in proper written form and gives
                        rise to legal consequences for the Parties equivalent to
                        those of a contract signed on paper.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    1.2. Definitions and Terms
                </h3>
                <p className="text-[#4a5564] mb-3">
                    For the purposes of this Offer, the terms listed below shall
                    have the following meanings:
                </p>
                <div className="space-y-2 text-[#4a5564]">
                    <p>
                        <strong>Acceptance</strong> &mdash; the successful
                        completion of a payment under the selected Plan.
                    </p>
                    <p>
                        <strong>Service</strong> &mdash; The
                        &ldquo;modme.uz&rdquo; software developed by the
                        Contractor, hosted in a cloud infrastructure, and
                        provided to the Customer for use via the Internet under
                        the SaaS (Software as a Service) model, designed for
                        business process automation, customer base management,
                        and internal document management.
                    </p>
                    <p>
                        <strong>SaaS (Software as a Service) Model</strong>{" "}
                        &mdash; a form of software provision whereby the
                        Customer gains access to the Service via the Internet
                        without installing the program on their own devices and
                        without the transfer of ownership rights or a copy of
                        the software to them.
                    </p>
                    <p>
                        <strong>Service</strong> &mdash; the Provider&rsquo;s
                        granting to the Customer of the right to access and use
                        the Service&rsquo;s functional capabilities under the
                        terms of the selected Plan.
                    </p>
                    <p>
                        <strong>Plan</strong> &mdash; a set of terms and
                        conditions for providing access to the Service
                        established by the Provider (scope of functionality,
                        number of users, payment amount, term of validity),
                        published on the Provider&rsquo;s website.
                    </p>
                    <p>
                        <strong>Payment under the Plan</strong> &mdash; the
                        monetary amount paid by the Customer as payment for the
                        Contractor&rsquo;s services in providing access to the
                        Service in accordance with the selected Plan.
                    </p>
                    <p>
                        <strong>Access Period</strong> &mdash; the term during
                        which the Customer has the right to use the Service in
                        accordance with the paid Plan. Unless otherwise provided
                        by the Plan, the standard access period is 1 (one)
                        calendar month.
                    </p>
                    <p>
                        <strong>Customer</strong> &mdash; a legal entity or
                        individual entrepreneur who has accepted this Offer and
                        thereby entered into an Agreement with the Contractor.
                    </p>
                    <p>
                        <strong>Contractor</strong> &mdash; Limited Liability
                        Company &ldquo;MODME&rdquo; (TIN 307442900), which
                        provides Services to the Customer under the terms of
                        this Offer.
                    </p>
                    <p>
                        <strong>Account</strong> &mdash; the Customer&rsquo;s
                        unique account created during registration on the
                        Service, which is used to access and manage the Service
                        and to identify the Customer.
                    </p>
                    <p>
                        <strong>Customer Content</strong> &mdash; information,
                        including but not limited to: texts, images, videos,
                        files, and data about customers and transactions, which
                        the Customer and its users post, upload, or otherwise
                        process using the Service.
                    </p>
                    <p>
                        <strong>Contractor&rsquo;s Website (Website)</strong>{" "}
                        &mdash; the website located at:{" "}
                        <a
                            href="https://modme.uz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ff8000] hover:underline"
                        >
                            https://modme.uz
                        </a>
                        , through which information regarding the terms of
                        Service provision, Account registration, and acceptance
                        of the Offer is provided.
                    </p>
                    <p>
                        <strong>Personal Data</strong> &mdash; any information
                        relating directly or indirectly to an identified or
                        identifiable natural person (data subject) processed in
                        the course of performing the Agreement.
                    </p>
                    <p>
                        <strong>Processing of personal data</strong> &mdash; any
                        action (operation) or set of actions (operations)
                        performed on personal data, including its collection,
                        recording, organization, storage, clarification
                        (updating, modification), retrieval, use, transfer
                        (distribution, disclosure, access), de-identification,
                        blocking, deletion, and destruction.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    1.3. Acceptance and Conclusion of the Contract.
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>1.3.1.</strong> Prior to paying the Fee, the
                        Customer must review the terms and conditions of this
                        Offer and its Annexes, which are posted on the
                        Contractor&rsquo;s Website at{" "}
                        <a
                            href="https://modme.uz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ff8000] hover:underline"
                        >
                            https://modme.uz
                        </a>
                        , and confirm their agreement by checking the
                        appropriate box on the order form.
                    </p>
                    <p>
                        <strong>1.3.2.</strong> By paying the cost of the
                        selected Plan using any of the provided payment methods,
                        the Customer accepts this Offer and becomes a Party to
                        the Contract for the provision of paid services
                        concluded with the Contractor under the terms set forth
                        in the Offer.
                    </p>
                    <p>
                        <strong>1.3.3.</strong> Depending on the selected
                        payment method, acceptance of the Offer is carried out
                        as follows:
                    </p>
                    <div className="ml-4 space-y-2">
                        <p>
                            <strong>1.3.3.1.</strong> When clicking the button
                            on the Website labeled &ldquo;Pay,&rdquo; &ldquo;Place
                            Order,&rdquo; or similar in meaning&mdash;the moment
                            of acceptance is the completion of payment via the
                            payment service integrated with the Website.
                        </p>
                        <p>
                            <strong>1.3.3.2.</strong> When paying via the
                            Telegram bot @modmebillingbot, the moment of
                            acceptance is deemed to be the successful completion
                            of the payment through the Bot integrated with the
                            Website.
                        </p>
                        <p>
                            <strong>1.3.3.3.</strong> When requesting payment
                            details for the Contractor&rsquo;s bank
                            account&mdash;the moment of acceptance is deemed to
                            be the transfer of funds to the Contractor&rsquo;s
                            bank account using the provided details. Payment
                            details may be requested via the feedback form on
                            the Site or by contacting the Contractor&rsquo;s
                            manager.
                        </p>
                    </div>
                    <p>
                        <strong>1.3.4.</strong> The date of the successful
                        payment made by the Customer shall be deemed the date of
                        conclusion of the Agreement. From that moment, the
                        Agreement shall be deemed concluded and shall give rise
                        to all rights and obligations for the Parties.
                    </p>
                    <p>
                        <strong>1.3.5.</strong> The Agreement enters into force
                        upon acceptance of this Offer and remains in effect for
                        the paid period of access provision, with subsequent
                        automatic renewal subject to timely payment for the next
                        period.
                    </p>
                    <p>
                        <strong>1.3.6.</strong> Registering an account on the
                        Contractor&rsquo;s Website and familiarizing oneself
                        with the Service&rsquo;s functionality in demo or test
                        mode do not constitute acceptance and do not result in
                        the conclusion of the Agreement. The person performing
                        these actions confirms that they possess the necessary
                        authority to represent the Customer&rsquo;s interests.
                        The Customer is responsible for the actions of its
                        representatives performed during the registration
                        process and while using the test access.
                    </p>
                    <p>
                        <strong>1.3.7.</strong> Acceptance of this Offer means
                        that the Customer:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>
                            possesses the necessary authority to enter into the
                            Agreement on behalf of a legal entity or individual
                            entrepreneur;
                        </li>
                        <li>
                            has reviewed the text of the Offer, the Rates, the
                            Personal Data Processing Policy, and other documents
                            published on the Contractor&rsquo;s Website, and
                            accepts them in full;
                        </li>
                        <li>
                            agrees to the use of electronic document management
                            and to receiving legally significant notifications
                            via the email address provided during registration;
                        </li>
                        <li>
                            consents to the processing of personal data and to
                            receiving informational and promotional messages
                            from the Contractor.
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    1.4. Legal Status of the Service and the Parties to the
                    Agreement
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>1.4.1.</strong> The Service is the intellectual
                        property of the Contractor. All exclusive rights to the
                        Service, including the source code, interface, design,
                        database structure, and documentation, belong to the
                        Contractor.
                    </p>
                    <p>
                        <strong>1.4.2.</strong> The Service is provided to the
                        Customer under the SaaS (Software as a Service) model,
                        which means granting the right to remote access to the
                        Service&rsquo;s functional capabilities via the
                        Internet. Granting access does not entail the transfer
                        of copies of the software to the Customer or the
                        transfer of ownership, except for the right to use it
                        within the scope of this Agreement.
                    </p>
                    <p>
                        <strong>1.4.3.</strong> The Contractor shall administer
                        the Service, provide technical support, perform backups,
                        and ensure cybersecurity to the extent necessary for the
                        proper provision of services.
                    </p>
                    <p>
                        <strong>1.4.4.</strong> Customer. The Customer uses the
                        Service in its own name and at its own risk,
                        independently determines the purposes and methods of
                        using the data received, and is responsible for the
                        content, legality, and relevance of the information it
                        enters.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    1.5. Governing Law and Language of the Agreement
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>1.5.1.</strong> This Offer, as well as all legal
                        relationships arising between the Contractor and the
                        Customer in connection with its acceptance and
                        performance, shall be governed by the laws of the
                        Republic of Uzbekistan, including the provisions of
                        civil, tax, information, and other applicable
                        legislation.
                    </p>
                    <p>
                        <strong>1.5.2.</strong> In interpreting and executing
                        this Offer, the following provisions shall apply:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>The Civil Code of the Republic of Uzbekistan;</li>
                        <li>
                            The Law of the Republic of Uzbekistan &ldquo;On
                            Electronic Commerce&rdquo;;
                        </li>
                        <li>
                            The Law of the Republic of Uzbekistan &ldquo;On
                            Personal Data&rdquo;;
                        </li>
                        <li>
                            The Law of the Republic of Uzbekistan &ldquo;On
                            Cybersecurity&rdquo;;
                        </li>
                        <li>
                            as well as other regulatory and legal acts of the
                            Republic of Uzbekistan governing activities in the
                            field of information technology and the provision of
                            electronic services.
                        </li>
                    </ul>
                    <p>
                        <strong>1.5.3.</strong> This Offer and all accompanying
                        documents (rates, policies, notices, correspondence) are
                        drafted in the state language&mdash;Uzbek&mdash;and may
                        also be published in Russian and English for the
                        convenience of users.
                    </p>
                    <p>
                        <strong>1.5.4.</strong> In the event of any discrepancy
                        between texts in different languages, the text in Uzbek,
                        as the official language, shall prevail.
                    </p>
                    <p>
                        <strong>1.5.5.</strong> If the Customer and the
                        Contractor use Russian as the language of business
                        communication, the parties acknowledge that the Russian
                        text of the Offer is legally equivalent to the Uzbek
                        text.
                    </p>
                    <p>
                        <strong>1.5.6.</strong> All notifications, agreements,
                        and other legally significant communications between the
                        parties shall be conducted in Russian or Uzbek via the
                        electronic communication channels provided for in this
                        Offer.
                    </p>
                </div>
            </div>
        </div>
    ),
    1: (
        <div className="space-y-6 text-left">
            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    2.1. Scope of Services Provided
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>2.1.1.</strong> The Contractor undertakes to
                        provide the Customer with services ensuring remote
                        access to the &ldquo;modme.uz&rdquo; software
                        (hereinafter referred to as the &ldquo;Service&rdquo;)
                        under the SaaS (Software as a Service) model, and the
                        Customer undertakes to accept and pay for such services
                        in accordance with the procedure established by this
                        Offer.
                    </p>
                    <p>
                        <strong>2.1.2.</strong> The Service consists of
                        providing the technical capability to use the
                        Service&rsquo;s functionalities for managing a customer
                        database, automating business processes, interacting
                        with counterparties, and performing other tasks provided
                        for by the Service&rsquo;s functionality.
                    </p>
                    <p>
                        <strong>2.1.3.</strong> Optionally, the Contractor
                        provides access to an additional functional module of
                        the Service (the LMS module&mdash;Learning Management
                        System), designed for the Customer to upload
                        educational materials, conduct classes and tests, and
                        grant access to students. Content (educational
                        materials, texts, videos, images, assignments, and
                        other information) posted by the Customer in the LMS
                        module belongs to the Customer. The Contractor does not
                        review such content for substance and is not liable for
                        its content or compliance with legal requirements. Upon
                        reasonable requests from government authorities or in
                        the event of a breach of the terms of this Offer, the
                        Contractor has the right to temporarily restrict access
                        to such content.
                    </p>
                    <p>
                        <strong>2.1.4.</strong> Granting access does not entail
                        the transfer of ownership rights or exclusive rights to
                        the Service to the Customer. Access is provided under a
                        non-exclusive right of use granted in accordance with
                        Section 6 of this Offer.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    2.2. Method of Providing Access
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>2.2.1.</strong> Access to the Service is
                        provided via:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>
                            the web interface at{" "}
                            <a
                                href="https://modme.uz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#ff8000] hover:underline"
                            >
                                https://modme.uz
                            </a>
                            ;
                        </li>
                        <li>
                            if necessary, an API interface for integration with
                            the Customer&rsquo;s other systems;
                        </li>
                        <li>
                            a mobile application, if available and supported by
                            the Contractor.
                        </li>
                    </ul>
                    <p>
                        <strong>2.2.2.</strong> The Service is used via the
                        Internet, without installing software on the
                        Customer&rsquo;s equipment.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    2.3. Terms of Use of the Service
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>2.3.1.</strong> The Customer is granted access
                        to the Service exclusively for the purpose of conducting
                        their own business activities within the limits of the
                        paid plan and the access period.
                    </p>
                    <p>
                        <strong>2.3.2.</strong> The Customer agrees that the
                        Service is provided &ldquo;as is,&rdquo; without any
                        additional warranties other than those expressly stated
                        in this Offer.
                    </p>
                    <p>
                        <strong>2.3.3.</strong> The Contractor provides
                        technical support in accordance with Appendix No. 2
                        (Technical Support Policy) and implements data
                        protection and cybersecurity measures in accordance
                        with Appendix No. 4 (Cybersecurity Policy).
                    </p>
                    <p>
                        <strong>2.3.4.</strong> All actions performed using the
                        Customer&rsquo;s login credentials shall be deemed to be
                        actions of the Customer and shall entail legal
                        consequences for the Customer.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    2.4. Territory of Service Provision
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>2.4.1.</strong> Services are provided within
                        the territory of the Republic of Uzbekistan; however,
                        access to the Service may be obtained from anywhere in
                        the world, provided that the laws of the Republic of
                        Uzbekistan are complied with.
                    </p>
                </div>
            </div>
        </div>
    ),
    2: (
        <div className="space-y-6 text-left">
            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    3.1. Registration and Account Creation Procedure
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>3.1.1.</strong> After paying the Fee to gain
                        access to the Service, the Customer completes the
                        registration process on the Contractor&rsquo;s website{" "}
                        <a
                            href="https://modme.uz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ff8000] hover:underline"
                        >
                            https://modme.uz
                        </a>{" "}
                        by creating an account (account).
                    </p>
                    <p>
                        <strong>3.1.2.</strong> Upon registration, the Customer
                        is required to provide all information requested in the
                        registration form: full name of the organization, TIN,
                        contact person, email address, phone number, as well as
                        other information necessary to identify the Customer
                        and facilitate interaction.
                    </p>
                    <p>
                        <strong>3.1.3.</strong> Upon registration, a unique
                        account is created for the Customer, through which
                        access is managed, users are configured, and services
                        under this Offer are received.
                    </p>
                    <p>
                        <strong>3.1.4.</strong> Registration with the Service
                        constitutes the Customer&rsquo;s acceptance of the
                        terms of this Offer, the Personal Data Processing
                        Policy, and the Cybersecurity Policy (Appendices 3 and
                        4).
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    3.2. Requirements for the Accuracy of Provided Data
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>3.2.1.</strong> Account registration is
                        performed by a person claiming authority to act on
                        behalf of the Customer. The Customer unconditionally
                        confirms that all actions performed using the Account
                        (including its registration) are deemed to have been
                        performed by the Customer themselves. The Customer
                        assumes all risks associated with the lack or absence
                        of authority on the part of the person who performed
                        the registration and bears full responsibility to the
                        Contractor for that person&rsquo;s actions. The
                        Contractor does not verify and is not obligated to
                        verify the authority of persons performing registration
                        and relies on the data provided during registration.
                    </p>
                    <p>
                        <strong>3.2.2.</strong> The Customer guarantees the
                        accuracy and currency of all information provided
                        during registration and while using the Service.
                    </p>
                    <p>
                        <strong>3.2.3.</strong> In the event of a change in
                        registration data, the Customer is obligated to update
                        it in a timely manner in their personal account or
                        notify the Contractor in writing (including via email).
                    </p>
                    <p>
                        <strong>3.2.4.</strong> The Contractor has the right to
                        request supporting documents from the Customer
                        (certificate of registration, power of attorney, etc.)
                        for the purpose of verifying the data.
                    </p>
                    <p>
                        <strong>3.2.5.</strong> The Contractor shall not be
                        liable for any losses caused by the Customer providing
                        inaccurate, incomplete, or outdated data.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    3.3. Access, Passwords, Account Security
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>3.3.1.</strong> Access to the Service is
                        granted via a unique username and password created by
                        the Customer during registration.
                    </p>
                    <p>
                        <strong>3.3.2.</strong> The Customer is solely
                        responsible for maintaining the confidentiality of
                        their account information, including passwords, tokens,
                        and access codes, and is liable for all actions
                        performed under their account.
                    </p>
                    <p>
                        <strong>3.3.3.</strong> The Contractor recommends using
                        strong passwords, multi-factor authentication, and
                        other security measures provided for in the
                        Cybersecurity Policy.
                    </p>
                    <p>
                        <strong>3.3.4.</strong> In the event of loss of control
                        over the account, password compromise, or suspicion of
                        unauthorized access, the Customer must immediately
                        notify the Contractor. The Contractor shall take
                        measures to suspend access and restore the account.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    3.4. Restriction of Access and Account Blocking
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>3.4.1.</strong> The Contractor has the right to
                        temporarily restrict or block the Customer&rsquo;s
                        access to the Service, in whole or in part, in the
                        following cases:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>
                            if the Customer violates the terms of this Offer,
                            the laws of the Republic of Uzbekistan, or
                            information security requirements;
                        </li>
                        <li>
                            if a cybersecurity threat, virus activity,
                            unauthorized access, or other suspicious activity
                            is detected;
                        </li>
                        <li>
                            in the event of late payment for services according
                            to the tariff;
                        </li>
                        <li>
                            upon request by government authorities in cases
                            provided for by law.
                        </li>
                    </ul>
                    <p>
                        <strong>3.4.2.</strong> The Contractor shall notify the
                        Customer of the suspension or blocking of access via
                        email or other available means, specifying the reasons
                        and the timeframe for resolving the violations.
                    </p>
                    <p>
                        <strong>3.4.3.</strong> Access shall be restored after
                        the circumstances that caused the block have been
                        resolved and the Contractor has confirmed that the
                        account can be safely reactivated.
                    </p>
                    <p>
                        <strong>3.4.4.</strong> The Contractor shall not be
                        liable for any consequences resulting from the blocking
                        of an account where there are grounds specified in this
                        section.
                    </p>
                </div>
            </div>
        </div>
    ),
    3: (
        <div className="space-y-6 text-left">
            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    4.1. Obligations of the Contractor
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>4.1.1.</strong> The Contractor undertakes to:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>
                            provide the Customer with access to the Service in
                            accordance with the terms of this Offer and the
                            selected pricing plan;
                        </li>
                        <li>
                            protect the Customer&rsquo;s data from unauthorized
                            access, loss, alteration, or destruction by
                            implementing the technical and organizational
                            measures provided for in the Cybersecurity Policy
                            (Appendix No. 4);
                        </li>
                        <li>
                            ensure the ability to restore the Customer&rsquo;s
                            data within no more than 6 months;
                        </li>
                        <li>
                            notify the Customer of technical interruptions,
                            scheduled updates, or other work affecting the
                            availability of the Service no later than 24
                            (twenty-four) hours prior to their commencement,
                            unless otherwise required by emergency
                            circumstances;
                        </li>
                        <li>
                            ensure the functioning of the electronic document
                            management system for sending acts, ESFs,
                            notifications, and other correspondence;
                        </li>
                        <li>
                            process personal data entered by the Customer into
                            the Service exclusively for the purposes of
                            performing this Agreement, in accordance with the
                            Law of the Republic of Uzbekistan &ldquo;On
                            Personal Data&rdquo; and the Personal Data
                            Processing Policy (Appendix No. 3);
                        </li>
                        <li>
                            provide technical support to the Customer in the
                            manner and to the extent provided for in Appendix
                            No. 2.
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    4.2. Rights of the Contractor
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>4.2.1.</strong> The Contractor has the right
                        to:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>
                            temporarily suspend the Customer&rsquo;s access to
                            the Service to perform preventive, maintenance, or
                            other technical work, provided the Customer is
                            notified in advance, except in emergency
                            situations;
                        </li>
                        <li>
                            modify the functionality, interface, technical
                            specifications, or structure of the Service without
                            compromising the overall level of service
                            availability and quality;
                        </li>
                        <li>
                            amend the rates and terms of service by publishing
                            them in advance on the Contractor&rsquo;s website;
                        </li>
                        <li>
                            restrict or block the Customer&rsquo;s access to
                            the Service in cases of violation of the terms of
                            this Offer, the laws of the Republic of Uzbekistan,
                            or the identification of a cybersecurity threat;
                        </li>
                        <li>
                            send notifications, messages about updates, changes
                            in rates, and other information related to the
                            performance of the contract to the email address
                            provided during registration;
                        </li>
                        <li>
                            use anonymized statistical data regarding the
                            Service&rsquo;s operation for the purposes of
                            analysis, service quality improvement, and
                            marketing research, without disclosing the
                            Customer&rsquo;s confidential information.
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    4.3. Customer&rsquo;s Obligations
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>4.3.1.</strong> The Customer undertakes to:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>
                            comply with the terms of this Offer, the pricing
                            plans, and the appendices published on the
                            Contractor&rsquo;s website;
                        </li>
                        <li>
                            use the Service solely within the scope of their
                            business activities and exclusively by lawful
                            means;
                        </li>
                        <li>
                            pay for the Contractor&rsquo;s services in a timely
                            manner in accordance with the selected pricing plan
                            and established deadlines;
                        </li>
                        <li>
                            ensure the confidentiality of their account
                            credentials (usernames, passwords, tokens, API
                            keys, and other access data);
                        </li>
                        <li>
                            not grant access to the Service to third parties
                            without the Contractor&rsquo;s written consent,
                            except for the Customer&rsquo;s authorized
                            employees;
                        </li>
                        <li>
                            ensure the accuracy and reliability of the data
                            provided during registration and use of the
                            Service;
                        </li>
                        <li>
                            be solely responsible for the content of
                            information entered and processed in the Service,
                            including the personal data of its employees and
                            clients (students);
                        </li>
                        <li>
                            immediately notify the Contractor of any
                            unauthorized access to the account, security
                            incidents, or suspicious activities;
                        </li>
                        <li>
                            comply with the laws of the Republic of Uzbekistan
                            regarding personal data protection, cybersecurity,
                            advertising, and e-commerce when using the Service.
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    4.4. Rights of the Customer
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>4.4.1.</strong> The Customer has the right to:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>
                            access the Service and its features within the
                            limits of the paid plan and the selected access
                            period;
                        </li>
                        <li>
                            contact the Contractor for technical support and
                            clarification of the terms of use of the Service;
                        </li>
                        <li>
                            receive from the Contractor service reports,
                            invoices, and other financial documentation in
                            accordance with established procedures;
                        </li>
                        <li>
                            upgrade to a higher pricing plan or extend access
                            to the Service for a new period upon payment of the
                            corresponding fee;
                        </li>
                        <li>
                            send the Contractor inquiries, requests, and
                            suggestions for improving the Service, and receive
                            information about new features and updates;
                        </li>
                        <li>
                            require the Contractor to ensure the confidentiality
                            and protection of data posted by the Customer on
                            the Service, in accordance with the laws of the
                            Republic of Uzbekistan.
                        </li>
                    </ul>
                    <p>
                        <strong>4.4.2.</strong> To receive consultations,
                        technical assistance, and information regarding the
                        operation of the Service, the Customer may contact:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>
                            via email:{" "}
                            <a
                                href="mailto:crmmodme@gmail.com"
                                className="text-[#ff8000] hover:underline"
                            >
                                crmmodme@gmail.com
                            </a>
                            ;
                        </li>
                        <li>
                            through the feedback form on the website{" "}
                            <a
                                href="https://modme.uz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#ff8000] hover:underline"
                            >
                                https://modme.uz
                            </a>
                            ;
                        </li>
                        <li>
                            or through the manager&rsquo;s official Telegram
                            account, a link to which is posted on the
                            Service&rsquo;s website.
                        </li>
                    </ul>
                    <p>
                        <strong>4.4.3.</strong> All inquiries are reviewed by
                        the Contractor on business days within 3 (three)
                        business days of receipt.
                    </p>
                    <p>
                        <strong>4.4.4.</strong> If necessary, inquiries
                        containing personal data or questions requiring account
                        verification may require confirmation of the
                        applicant&rsquo;s identity.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    4.5. Restrictions on Use of the Service (Prohibited
                    Actions)
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>4.5.1.</strong> The Customer is prohibited
                        from:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>
                            using the Service to post, process, or transmit
                            information that violates the laws of the Republic
                            of Uzbekistan, the rights of third parties, or
                            standards of morality or business ethics;
                        </li>
                        <li>
                            taking actions aimed at interfering with the
                            operation of the Service, bypassing its security
                            systems, analyzing source code, or decompiling
                            software;
                        </li>
                        <li>
                            using the Service to send spam, malicious files,
                            viruses, Trojans, or other programs capable of
                            disrupting the Service or causing harm to third
                            parties;
                        </li>
                        <li>
                            transferring access to your account or using
                            someone else&rsquo;s account credentials;
                        </li>
                        <li>
                            posting or transmitting through the Service
                            information containing personal data of third
                            parties without their consent, except as provided
                            by law;
                        </li>
                        <li>
                            using the Service in a manner that results in an
                            excessive load on the Contractor&rsquo;s
                            infrastructure or poses a threat to its stability;
                        </li>
                        <li>
                            engaging in any actions aimed at undermining the
                            reputation of the Contractor, its Service, or its
                            clients.
                        </li>
                    </ul>
                    <p>
                        <strong>4.5.2.</strong> In the event of violations, the
                        Contractor has the right to restrict or block the
                        Customer&rsquo;s access to the Service without prior
                        notice, followed by written notification of the reasons
                        for the block.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    4.6. Confidentiality
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>4.6.</strong> The Parties undertake to maintain
                        the confidentiality of all information received in
                        connection with the performance of this Agreement and
                        not to disclose it to third parties without the written
                        consent of the other Party, except in cases expressly
                        provided for by law.
                    </p>
                </div>
            </div>
        </div>
    ),
    4: (
        <div className="space-y-6 text-left">
            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    5.1. Rates
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>5.1.1.</strong> The cost of services is
                        determined in accordance with the prices published on
                        the Contractor&rsquo;s official website{" "}
                        <a
                            href="https://modme.uz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ff8000] hover:underline"
                        >
                            https://modme.uz
                        </a>{" "}
                        and specified in Appendix No. 1 &ldquo;Rates.&rdquo;
                    </p>
                    <p>
                        <strong>5.1.2.</strong> The cost of services is
                        determined based on the Rate, which depends on the
                        number of students at the Customer&rsquo;s institution
                        and is determined by the Contractor unilaterally.
                    </p>
                    <p>
                        <strong>5.1.3.</strong> All rates are set in the
                        national currency&mdash;Uzbek sum (UZS)&mdash;and
                        include all mandatory taxes and fees, unless otherwise
                        specified in the Rate.
                    </p>
                    <p>
                        <strong>5.1.4.</strong> The Contractor may amend the
                        rates by publishing a new version on the website. New
                        rates apply only to subsequent periods and do not
                        affect those already paid.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    5.2. Payment
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>5.2.1.</strong> Payment for services may be
                        made:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>by wire transfer to the account;</li>
                        <li>
                            via online payment systems integrated with the
                            Service;
                        </li>
                        <li>
                            using bank cards connected to the national payment
                            system of the Republic of Uzbekistan.
                        </li>
                    </ul>
                    <p>
                        <strong>5.2.2.</strong> Payment for services is made in
                        the form of a 100% prepayment to the Contractor&rsquo;s
                        bank account. The cost of the Services does not include
                        VAT.
                    </p>
                    <p>
                        <strong>5.2.3.</strong> Payment for the selected Plan
                        shall be made by the Customer in the following manner:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>
                            the first payment shall be made prior to the
                            conclusion of the Agreement in accordance with the
                            terms of this Offer;
                        </li>
                        <li>
                            subsequent payments for new periods of access
                            provision shall be made no later than 1 (one)
                            calendar day prior to the start of the relevant
                            period.
                        </li>
                    </ul>
                    <p>
                        <strong>5.2.4.</strong> When paying via online payment
                        systems, the Contractor shall ensure the issuance of a
                        fiscal receipt in accordance with the requirements of
                        the Tax Code of the Republic of Uzbekistan and shall
                        send it to the Customer in electronic form.
                    </p>
                    <p>
                        <strong>5.2.5.</strong> The cost of the Services does
                        not include any fees charged by banks or payment
                        systems for processing the payment, unless otherwise
                        specified in the pricing schedule.
                    </p>
                    <p>
                        <strong>5.2.6.</strong> The date of payment shall be
                        deemed to be the date on which funds are credited to
                        the Contractor&rsquo;s bank account or the date of
                        successful confirmation of the transaction by the
                        payment system.
                    </p>
                    <p>
                        <strong>5.2.7.</strong> The Customer is solely
                        responsible for any errors made by them when paying for
                        the Services. The Contractor shall not be liable for
                        any losses or other adverse consequences that may arise
                        for the Customer in the event of an incorrect payment
                        description.
                    </p>
                    <p>
                        <strong>5.2.8.</strong> The Contractor has the right,
                        at its discretion, to offer discounts on the cost of
                        services.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    5.3. Documentation Procedure
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>5.3.1.</strong> On the last day of each month
                        of the paid access period, the Contractor shall
                        generate and send to the Customer, via the electronic
                        document management system, a Statement of Services
                        Rendered and an Electronic Invoice (EI).
                    </p>
                    <p>
                        <strong>5.3.2.</strong> The Customer must, no later
                        than five (5) calendar days from the date of receipt of
                        the Statement of Services Rendered and the E-Invoice,
                        sign them with an electronic digital signature or
                        submit a reasoned refusal to accept them. The
                        Customer&rsquo;s objections may not exceed the scope of
                        obligations provided for in the Agreement. If the
                        Customer fails to provide a reasoned objection to
                        signing the Statement and the E-Invoice, it shall be
                        deemed that the Customer has accepted the services
                        rendered in full and without complaint.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    5.4. Extension of the Access Period
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>5.4.1.</strong> Upon expiration of the paid
                        access period, the Agreement is automatically extended
                        for a similar term, provided that payment for the next
                        period is received from the Customer.
                    </p>
                    <p>
                        <strong>5.4.2.</strong> The Customer has the right to
                        decline the extension by notifying the Contractor at
                        least five (5) calendar days prior to the end of the
                        current access period.
                    </p>
                    <p>
                        <strong>5.4.3.</strong> In the absence of payment for
                        the next period, the Agreement shall be deemed
                        automatically terminated on the day following the
                        expiration of the previously provided access period to
                        the Service.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    5.5. Refunds
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>5.5.1.</strong> The services under this Offer
                        are provided exclusively to legal entities and
                        individual entrepreneurs for business purposes.
                        Accordingly, the Law of the Republic of Uzbekistan
                        &ldquo;On the Protection of Consumer Rights&rdquo; does
                        not apply to the relationship between the parties.
                    </p>
                    <p>
                        <strong>5.5.2.</strong> Refunds are possible only in
                        the following cases:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>an erroneous or duplicate transfer of funds;</li>
                        <li>
                            an unauthorized debit due to a fault of the payment
                            system;
                        </li>
                        <li>
                            a technical error in the Contractor&rsquo;s
                            billing;
                        </li>
                        <li>
                            documented failure to provide services due to the
                            Contractor&rsquo;s fault;
                        </li>
                        <li>
                            early termination of the contract at the
                            Contractor&rsquo;s initiative before the end of the
                            paid period.
                        </li>
                    </ul>
                    <p>
                        <strong>5.5.3.</strong> No refund will be issued if:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>
                            the Customer has ceased using the Service at their
                            own discretion before the end of the paid period;
                        </li>
                        <li>
                            the Service&rsquo;s functional capabilities
                            correspond to the description but do not meet the
                            Customer&rsquo;s subjective expectations;
                        </li>
                        <li>
                            access has been suspended due to the
                            Customer&rsquo;s violation of the terms of this
                            Offer or applicable law.
                        </li>
                    </ul>
                    <p>
                        <strong>5.5.4.</strong> To request a refund, the
                        Customer shall submit a written request to the
                        Contractor&rsquo;s email address or via the electronic
                        document management system, specifying:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>the organization&rsquo;s name and TIN;</li>
                        <li>the payment or invoice number;</li>
                        <li>the date and amount of payment;</li>
                        <li>the reason for the refund.</li>
                    </ul>
                    <p>
                        <strong>5.5.5.</strong> The request must be submitted
                        no later than 10 (ten) business days from the date the
                        grounds for the refund arose.
                    </p>
                    <p>
                        <strong>5.5.6.</strong> The Contractor shall review the
                        request within 5 (five) business days and notify the
                        Customer of the decision. If the grounds are confirmed,
                        the refund shall be issued within 15 (fifteen) business
                        days via the same method used for payment.
                    </p>
                    <p>
                        <strong>5.5.7.</strong> In the event of technical
                        incidents that render the Service unusable, the
                        Contractor may provide compensation in the form of an
                        extension of the paid period or a credit toward the
                        next payment. No cash refund will be issued in such
                        cases, unless otherwise specified by the Contractor.
                    </p>
                </div>
            </div>
        </div>
    ),
    5: (
        <div className="space-y-6 text-left">
            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    6.1. Exclusive Rights to the Service
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>6.1.1.</strong> The Service is the result of
                        intellectual activity and is protected by the laws of
                        the Republic of Uzbekistan, including the Civil Code
                        and the Law &ldquo;On Copyright and Related
                        Rights.&rdquo;
                    </p>
                    <p>
                        <strong>6.1.2.</strong> All exclusive property and
                        non-property rights to the Service, its components,
                        design, database structure, source code, technical
                        documentation, interfaces, logos, and other elements
                        belong exclusively to the Contractor.
                    </p>
                    <p>
                        <strong>6.1.3.</strong> No provision of this Offer may
                        be construed as a transfer to the Customer of ownership
                        rights or exclusive rights to the Service or any part
                        thereof.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    6.2. Terms of Use of the Service
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>6.2.1.</strong> The Contractor grants the
                        Customer a non-exclusive, limited, non-transferable,
                        and revocable right to use the Service within the
                        limits established by this Offer, the paid Plan, and
                        the access period.
                    </p>
                    <p>
                        <strong>6.2.2.</strong> The right to use the Service is
                        granted solely to the Customer.
                    </p>
                    <p>
                        <strong>6.2.3.</strong> The Customer is prohibited
                        from:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>
                            copying, modifying, adapting, translating,
                            decompiling, or otherwise attempting to obtain the
                            source code of the Service;
                        </li>
                        <li>
                            selling, giving away, renting, lending, publishing,
                            transmitting, or otherwise providing access to the
                            Service to third parties without the
                            Contractor&rsquo;s written consent;
                        </li>
                        <li>
                            removing or altering copyright notices, trademarks,
                            or notices regarding the Contractor&rsquo;s rights;
                        </li>
                        <li>
                            using the Service to create derivative software
                            products or services similar in functionality;
                        </li>
                        <li>
                            using the Service for purposes that conflict with
                            the laws of the Republic of Uzbekistan, as well as
                            those that violate the rights of the Contractor or
                            third parties.
                        </li>
                    </ul>
                    <p>
                        <strong>6.2.4.</strong> Any use of the Service beyond
                        the scope of the granted rights shall be deemed a
                        violation of the Contractor&rsquo;s exclusive rights
                        and shall entail liability in accordance with the laws
                        of the Republic of Uzbekistan.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    6.3. Rights to Content Created by the Customer
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>6.3.1.</strong> The Contractor does not claim
                        ownership rights to the Customer&rsquo;s Content and
                        uses it solely for the purpose of ensuring the
                        functioning of the Service and the performance of this
                        Agreement.
                    </p>
                    <p>
                        <strong>6.3.2.</strong> The Customer bears full
                        responsibility for the legality of the Content it
                        posts, including compliance with legal requirements
                        regarding the protection of personal data, trade
                        secrets, intellectual property, and the prohibition on
                        the dissemination of prohibited information.
                    </p>
                </div>
            </div>
        </div>
    ),
    6: (
        <div className="space-y-6 text-left">
            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    7.1. Legal Status of the Parties in Data Processing
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>7.1.1.</strong> The Customer is the owner and
                        controller of the personal data that it submits to the
                        Service while using its features.
                    </p>
                    <p>
                        <strong>7.1.2.</strong> The Contractor is:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>
                            the controller of personal data with respect to
                            data obtained during the registration and use of
                            the Service by the Customer and its
                            representatives;
                        </li>
                        <li>
                            a third party with respect to personal data posted
                            by the Customer on the Service (including data
                            about clients, students, and employees).
                        </li>
                    </ul>
                    <p>
                        <strong>7.1.3.</strong> The Contractor processes
                        personal data exclusively at the Customer&rsquo;s
                        request and to the extent necessary to fulfill
                        contractual obligations.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    7.2. Categories of Processed Data
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>7.2.1.</strong> The following data may be
                        processed during the operation of the Service:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>
                            data provided by the Customer during registration
                            (organization name, TIN, contact person, phone
                            number, email, etc.);
                        </li>
                        <li>
                            data that the Customer or its employees post on the
                            Service when working with clients;
                        </li>
                        <li>
                            technical data automatically collected when using
                            the Service (IP address, browser type, log files,
                            etc.).
                        </li>
                    </ul>
                    <p>
                        <strong>7.2.2.</strong> The Contractor does not
                        independently collect or process the personal data of
                        the Customer&rsquo;s clients. All such data is
                        processed on behalf of and under the responsibility of
                        the Customer.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    7.3. Purposes and Legal Grounds for Processing
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>7.3.1.</strong> The Contractor processes
                        personal data solely for the following purposes:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>
                            to fulfill the contract and provide access to the
                            Service;
                        </li>
                        <li>
                            to communicate with the Customer regarding service
                            matters;
                        </li>
                        <li>
                            to ensure the security and stable operation of the
                            Service;
                        </li>
                        <li>
                            to comply with the requirements of the legislation
                            of the Republic of Uzbekistan.
                        </li>
                    </ul>
                    <p>
                        <strong>7.3.2.</strong> All actions involving personal
                        data are performed in accordance with the Law of the
                        Republic of Uzbekistan &ldquo;On Personal Data&rdquo;
                        and the Personal Data Processing Policy (Appendix No.
                        3), which is posted on the Contractor&rsquo;s Website.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    7.4. Consent to the Processing of Personal Data
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>7.4.1.</strong> Upon registration and payment
                        for services, the Customer confirms that they have
                        consented to the processing of their personal data, and
                        have also obtained consent for the processing of
                        personal data from their employees and clients
                        (students) whose data they enter into the Service.
                    </p>
                    <p>
                        <strong>7.4.2.</strong> The Customer shall be liable in
                        the event that the Contractor makes any claims due to
                        the Customer&rsquo;s failure to comply with the
                        condition set forth in the preceding paragraph of this
                        Offer.
                    </p>
                    <p>
                        <strong>7.4.3.</strong> The Contractor processes data
                        based on this consent and only to the extent necessary
                        for the performance of this agreement.
                    </p>
                    <p>
                        <strong>7.4.4.</strong> If a potential customer submits
                        their data via the website or clicks a button to access
                        the manager&rsquo;s Telegram account, they also consent
                        to the processing of their contact data for
                        communication and to receive information about the
                        service.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    7.5. Transfer to Third Parties and Cross-Border Transfer
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>7.5.1.</strong> The Contractor does not
                        transfer personal data to third parties, except in
                        cases expressly provided for by law or necessary to
                        fulfill the terms of the contract (e.g., payment
                        systems, telecommunications operators, notification
                        services).
                    </p>
                    <p>
                        <strong>7.5.2.</strong> In cases where data is
                        transferred outside the Republic of Uzbekistan, the
                        Contractor guarantees that such transfer is carried out
                        in accordance with legal requirements and only if there
                        is an adequate level of data protection in the
                        receiving country.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    7.6. Data Localization within the Territory of the Republic
                    of Uzbekistan
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>7.6.1.</strong> Databases containing personal
                        data processed by the Contractor are located and
                        registered within the territory of the Republic of
                        Uzbekistan in accordance with legal requirements.
                    </p>
                    <p>
                        <strong>7.6.2.</strong> The Contractor uses server
                        capacity and hosting located in the Republic of
                        Uzbekistan, which ensures the physical localization and
                        protection of information.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    7.7. Data Storage, Deletion, and Export
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>7.7.1.</strong> Personal data is stored in the
                        Service for the duration of the contract and no longer
                        than is necessary to fulfill its terms, unless
                        otherwise required by law.
                    </p>
                    <p>
                        <strong>7.7.2.</strong> Upon termination of the
                        contract or upon the Customer&rsquo;s written request,
                        the data may be deleted or anonymized.
                    </p>
                    <p>
                        <strong>7.7.3.</strong> The Contractor shall delete or
                        anonymize the data within sixty (60) calendar days of
                        receiving a written request from the Customer or the
                        termination of the contract, unless otherwise required
                        by law.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    7.8. Rights of Data Subjects
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>7.8.1.</strong> Every data subject (natural
                        person) has the right to:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>
                            receive information about their data processed on
                            the Service;
                        </li>
                        <li>
                            request the correction, blocking, or deletion of
                            their data;
                        </li>
                        <li>
                            withdraw previously given consent to the processing
                            of personal data;
                        </li>
                        <li>
                            appeal actions that violate their rights to the
                            competent authorities or a court.
                        </li>
                    </ul>
                    <p>
                        <strong>7.8.2.</strong> The Customer ensures compliance
                        with these rights regarding the data that they
                        themselves post on the Service.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    7.9. Contact Information for the Data Protection Officer
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>7.9.1.</strong> Questions related to the
                        processing of personal data, as well as notifications
                        and requests, may be sent to the following email
                        address:{" "}
                        <a
                            href="mailto:crmmodme@gmail.com"
                            className="text-[#ff8000] hover:underline"
                        >
                            crmmodme@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    ),
    7: (
        <div className="space-y-6 text-left">
            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    8.1. Measures to Ensure the Security of the Service
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>8.1.1.</strong> The Contractor shall ensure the
                        protection of the Service and the Customer&rsquo;s
                        data by employing technical and organizational measures
                        designed to prevent unauthorized access, loss, or
                        alteration of information.
                    </p>
                    <p>
                        <strong>8.1.2.</strong> The following measures are
                        applied to protect data:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>
                            secure data transmission protocols (HTTPS,
                            SSL/TLS);
                        </li>
                        <li>
                            a user access control and authentication system;
                        </li>
                        <li>
                            antivirus and anti-malware protection for servers;
                        </li>
                        <li>regular software updates;</li>
                        <li>
                            restriction of the Contractor&rsquo;s
                            employees&rsquo; access to the Customer&rsquo;s
                            data on a need-to-know basis (role-based access).
                        </li>
                    </ul>
                    <p>
                        <strong>8.1.3.</strong> The Contractor regularly
                        conducts internal audits of security systems and tests
                        the infrastructure for vulnerabilities in accordance
                        with the Cybersecurity Policy (Appendix No. 4). The
                        results of audits and inspections are not disclosed but
                        may be provided to the Customer in summary form upon
                        written request.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    8.2. Liability for Unauthorized Access
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>8.2.1.</strong> The Contractor is responsible
                        for the security of data stored on the Service within
                        the scope of its technical responsibility&mdash;that
                        is, for the protection of the Service&rsquo;s servers,
                        communication channels, and infrastructure.
                    </p>
                    <p>
                        <strong>8.2.2.</strong> The Customer is responsible for
                        the security of its accounts, passwords, and the
                        actions of users to whom it has granted access to the
                        Service.
                    </p>
                    <p>
                        <strong>8.2.3.</strong> The Contractor shall not be
                        liable for losses arising from:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>
                            the Customer&rsquo;s disclosure of its passwords to
                            third parties;
                        </li>
                        <li>
                            the use of uncertified equipment or insecure
                            networks;
                        </li>
                        <li>
                            unlawful actions by the Customer&rsquo;s employees
                            or its contractors.
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    8.3. Data Backup and Recovery
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>8.3.1.</strong> The Contractor performs regular
                        backups of data stored on the Service to prevent data
                        loss in the event of technical failures or other
                        incidents.
                    </p>
                    <p>
                        <strong>8.3.2.</strong> The frequency of backups, the
                        retention period for copies, and the data recovery
                        procedure are determined by the Contractor&rsquo;s
                        internal regulations.
                    </p>
                    <p>
                        <strong>8.3.3.</strong> In the event of data loss due
                        to the Contractor&rsquo;s fault, the Contractor shall
                        take measures to restore the data as soon as possible.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    8.4. Notifications of Security Breaches (Incidents)
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>8.4.1.</strong> In the event of unauthorized
                        access, a data leak, a virus attack, or other incidents
                        affecting the Customer&rsquo;s data, the Contractor
                        shall immediately take measures to contain the threat
                        and prevent the spread of its consequences.
                    </p>
                    <p>
                        <strong>8.4.2.</strong> The Contractor shall notify the
                        Customer of the incident no later than 24 hours after
                        its detection, specifying the nature of the incident,
                        the presumed causes, and the measures taken.
                    </p>
                    <p>
                        <strong>8.4.3.</strong> If the incident results in a
                        personal data breach, the Contractor shall also notify
                        the State Cybersecurity Center and other competent
                        authorities in accordance with the procedure
                        established by the legislation of the Republic of
                        Uzbekistan.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    8.5. Actions of the Parties in the Event of Incidents and
                    Data Breaches
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>8.5.1.</strong> Upon detection of an incident,
                        the Customer shall immediately notify the Contractor of
                        any suspicious activities or instances of account
                        security breaches.
                    </p>
                    <p>
                        <strong>8.5.2.</strong> The parties shall cooperate and
                        exchange information regarding identified threats, and
                        shall take joint measures to mitigate the consequences
                        and prevent recurrence of incidents.
                    </p>
                    <p>
                        <strong>8.5.3.</strong> The Contractor shall document
                        all security breaches, conduct an internal
                        investigation, and, upon the Customer&rsquo;s request,
                        provide a report on the findings and measures taken.
                    </p>
                    <p>
                        <strong>8.5.4.</strong> If the breach occurred due to
                        the Customer&rsquo;s fault, the Customer shall be
                        liable for the resulting losses and undertakes to
                        reimburse the Contractor for the expenses incurred in
                        connection with mitigating the consequences of the
                        incident.
                    </p>
                </div>
            </div>
        </div>
    ),
    8: (
        <div className="space-y-6 text-left">
            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    9.1. General Provisions on the Allocation of Risks
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>9.1.1.</strong> Each party shall be liable for
                        the proper performance of its obligations under this
                        Offer to the extent provided by the laws of the
                        Republic of Uzbekistan and the terms of the agreement.
                    </p>
                    <p>
                        <strong>9.1.2.</strong> The Parties undertake to act in
                        good faith, to fulfill their obligations in a timely
                        manner, and to prevent any actions that could cause
                        harm to the other Party.
                    </p>
                    <p>
                        <strong>9.1.3.</strong> Risks associated with the use
                        of the Service (including risks of data loss due to the
                        Customer&rsquo;s fault, internet connection failures,
                        actions of third parties, etc.) shall be allocated
                        between the parties in accordance with this section.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    9.2. Contractor&rsquo;s Liability
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>9.2.1.</strong> The Contractor shall be liable
                        to the Customer for:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>
                            providing access to the Service within the limits
                            of the paid plan and the period of access
                            provision;
                        </li>
                        <li>
                            protecting and safeguarding the Customer&rsquo;s
                            data within the scope of its technical
                            responsibility;
                        </li>
                        <li>
                            resolving technical malfunctions and restoring
                            access to the Service within a reasonable
                            timeframe.
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    9.3. Customer&rsquo;s Liability
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>9.3.1.</strong> The Customer is responsible
                        for:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>
                            the accuracy of the data provided during
                            registration;
                        </li>
                        <li>
                            the security and confidentiality of logins,
                            passwords, and other access credentials;
                        </li>
                        <li>
                            the actions of its employees and other persons who
                            have gained access to the Service on behalf of the
                            Customer;
                        </li>
                        <li>
                            the legality of the data posted on the Service,
                            including the personal data of clients (students)
                            and counterparties;
                        </li>
                        <li>
                            using the Service exclusively within the scope of
                            its functionality and in accordance with the laws
                            of the Republic of Uzbekistan.
                        </li>
                    </ul>
                    <p>
                        <strong>9.3.2.</strong> In the event of a violation of
                        the terms of this Offer or applicable law, the Customer
                        shall be obligated to compensate the Contractor for any
                        losses incurred, including expenses related to
                        investigating and remedying the consequences of the
                        incident.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    9.4. Limitation of Liability
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>9.4.1.</strong> The Contractor shall not be
                        liable for:
                    </p>
                    <ul className="ml-6 space-y-1 list-disc">
                        <li>
                            Service disruptions caused by malfunctions in the
                            Customer&rsquo;s equipment or communication
                            channels;
                        </li>
                        <li>
                            acts or omissions of third parties (including
                            telecommunications providers, hosting providers,
                            payment systems, etc.);
                        </li>
                        <li>
                            data loss caused by the Customer or its employees;
                        </li>
                        <li>
                            losses caused by improper use of the Service or
                            failure to follow instructions.
                        </li>
                    </ul>
                    <p>
                        <strong>9.4.2.</strong> The Contractor does not
                        guarantee the absolute uninterrupted and error-free
                        operation of the Service, but undertakes to use all
                        reasonable efforts to ensure its stable functioning.
                    </p>
                    <p>
                        <strong>9.4.3.</strong> The Contractor shall not be
                        liable for lost profits, loss of data or revenue, or
                        for any indirect losses incurred by the Customer while
                        using the Service.
                    </p>
                    <p>
                        <strong>9.4.4.</strong> In the event of the
                        Contractor&rsquo;s fault, its liability shall be
                        limited to the amount actually paid by the Customer
                        for the period during which the breach occurred.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    9.5. Force Majeure (Circumstances of Force Majeure)
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>9.5.1.</strong> The Parties shall be exempt
                        from liability for the total or partial non-performance
                        of their obligations if this results from circumstances
                        beyond their reasonable control (force majeure),
                        including: natural disasters, fires, floods,
                        earthquakes, military actions, civil unrest, strikes,
                        acts of terrorism, actions by government authorities,
                        failures in the operation of power or telecommunications
                        networks, epidemics, and failures in the operation of
                        data centers.
                    </p>
                    <p>
                        <strong>9.5.2.</strong> The party affected by such
                        circumstances shall notify the other party within three
                        (3) business days of their occurrence, providing
                        supporting documents from the competent authorities.
                    </p>
                    <p>
                        <strong>9.5.3.</strong> If the force majeure event
                        continues for more than thirty (30) calendar days,
                        either party has the right to terminate the agreement
                        unilaterally by notifying the other party.
                    </p>
                </div>
            </div>
        </div>
    ),
    9: (
        <div className="space-y-6 text-left">
            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    10.1. Termination at the Customer&rsquo;s Initiative
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>10.1.1.</strong> The Customer may at any time
                        cease using the Service by sending the Contractor a
                        notice of termination at least five (5) calendar days
                        prior to the end of the current paid period. In the
                        event of the Customer&rsquo;s unilateral termination of
                        the Agreement prior to the end of the paid period, the
                        funds paid shall not be refunded, except in the cases
                        specified in Section 5 of this Offer.
                    </p>
                    <p>
                        <strong>10.1.2.</strong> The Agreement shall be deemed
                        terminated upon the expiration of the paid period if
                        the Customer has not made payment for the next period
                        and does not intend to renew access.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    10.2. Termination at the Contractor&rsquo;s Initiative
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>10.2.1.</strong> The Contractor has the right
                        at any time to refuse to continue providing the
                        Services by sending the Customer a notice of
                        termination at least five (5) calendar days before the
                        end of the current paid period via the personal account
                        or by email, specifying the reason and the date of
                        termination of access.
                    </p>
                    <p>
                        <strong>10.2.2.</strong> Upon unilateral termination of
                        the contract by the Contractor due to the
                        Customer&rsquo;s breach of the terms of this Offer.
                        Funds for the unused period shall not be refunded but
                        shall be retained by the Contractor as a contractual
                        penalty to cover the Contractor&rsquo;s losses and
                        expenses.
                    </p>
                    <p>
                        <strong>10.2.3.</strong> Upon termination of the
                        Agreement at the initiative of the Contractor, for
                        reasons beyond the Customer&rsquo;s control, the
                        Customer&rsquo;s funds for the unused period shall be
                        refunded in accordance with Section 5 of this Offer.
                    </p>
                    <p>
                        <strong>10.2.4.</strong> The Parties have the right to
                        terminate the Contract by mutual agreement by notifying
                        the other Party in writing at least five (5) calendar
                        days prior to the termination date.
                    </p>
                    <p>
                        <strong>10.2.5.</strong> Notices of termination of the
                        Agreement shall be sent via the electronic document
                        management system, and the other Party shall be
                        notified thereof via the messenger or email through
                        which communication between the Parties took place.
                    </p>
                    <p>
                        <strong>10.2.6.</strong> The Agreement shall be deemed
                        terminated as of the date the other Party accepts the
                        notice in the electronic document management system.
                    </p>
                    <p>
                        <strong>10.2.7.</strong> If a Party has sent a written
                        notice of termination of the Agreement via the
                        electronic document management system and notified the
                        other Party thereof within the established timeframes,
                        but the other Party has not responded to the message or
                        signed the notice in the electronic document management
                        system within the specified timeframes, the Agreement
                        shall be deemed terminated as of the date the notice
                        was sent. Termination of the Agreement is possible only
                        after final mutual settlements between the Parties.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    10.3. Data Retention After Termination
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>10.3.1.</strong> Upon termination of the
                        Agreement, the Customer&rsquo;s access to the
                        Service&rsquo;s functionality shall cease. The
                        Contractor undertakes to ensure the preservation of the
                        Customer&rsquo;s Content and to provide the ability to
                        export it within sixty (60) calendar days from the date
                        of termination of the Agreement.
                    </p>
                    <p>
                        <strong>10.3.2.</strong> Upon expiration of the
                        specified period, all data may be deleted or
                        anonymized in accordance with the Personal Data
                        Processing Policy.
                    </p>
                    <p>
                        <strong>10.3.3.</strong> If the Customer, within 30
                        (thirty) calendar days after the expiration of the
                        Agreement, enters into a new Agreement (pays the Fee)
                        for the next period, their data may be restored from a
                        backup copy if technically feasible.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    10.4. Return or Deletion of User Data
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>10.4.1.</strong> Upon the Customer&rsquo;s
                        written request, the Contractor shall provide a data
                        export in a machine-readable format (e.g., CSV or
                        Excel) within ten (10) business days of receiving the
                        request.
                    </p>
                    <p>
                        <strong>10.4.2.</strong> After exporting and confirming
                        receipt of the data, the Contractor shall delete copies
                        of the data from its operational systems and backups
                        within sixty (60) calendar days, unless otherwise
                        required by law.
                    </p>
                    <p>
                        <strong>10.4.3.</strong> The deletion of data is
                        irreversible and signifies the final termination of
                        services under this Offer.
                    </p>
                </div>
            </div>
        </div>
    ),
    10: (
        <div className="space-y-6 text-left">
            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    11.1. Pre-litigation Resolution Procedure
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>11.1.1.</strong> The parties shall endeavor to
                        resolve all disagreements and disputes arising between
                        the Contractor and the Customer regarding the
                        performance, amendment, termination, or interpretation
                        of this Offer and the contract through negotiations.
                    </p>
                    <p>
                        <strong>11.1.2.</strong> Before filing a lawsuit, the
                        party claiming that its rights have been violated must
                        send the other party a written claim setting forth the
                        essence of the dispute and a proposal for its voluntary
                        resolution.
                    </p>
                    <p>
                        <strong>11.1.3.</strong> Claims regarding the scope and
                        quality of services rendered shall be sent in writing
                        to the Contractor&rsquo;s email address, accompanied by
                        supporting materials (screenshots, correspondence,
                        etc.).
                    </p>
                    <p>
                        <strong>11.1.4.</strong> The claim review period is up
                        to 10 (ten) business days. If the claim is deemed
                        valid, the Contractor shall remedy the identified
                        deficiencies or provide compensation (extension of
                        access, recalculation of the cost).
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    11.2. Jurisdiction and Venue for Dispute Resolution
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>11.2.1.</strong> All disputes and disagreements
                        not resolved through negotiation shall be resolved in
                        the court of the Contractor&rsquo;s place of state
                        registration. The parties acknowledge that this
                        jurisdiction is final and binding.
                    </p>
                </div>
            </div>
        </div>
    ),
    11: (
        <div className="space-y-6 text-left">
            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    12.1. Interaction Between the Parties
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>12.1.1.</strong> The Offer, the Agreement, any
                        supplementary agreements and annexes thereto,
                        Certificates, and Invoices shall be signed by the
                        Parties via the electronic document management system
                        using an electronic digital signature (EDS) key. Other
                        documents, notifications, and information related to
                        the performance of the Agreement may be sent by the
                        Parties via email, instant messaging, or the electronic
                        document management system, including, but not limited
                        to, claims regarding the Services provided by the
                        Contractor, etc. The Parties recognize the legal
                        validity of electronic documents and letters and
                        acknowledge them as equivalent to paper documents
                        signed by hand.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    12.2. Procedure for Amending the Offer
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>12.2.1.</strong> The Contractor has the right
                        to make amendments and additions to this Offer, its
                        annexes, as well as to the rates and other related
                        documents.
                    </p>
                    <p>
                        <strong>12.2.2.</strong> All amendments are published
                        on the Contractor&rsquo;s official website{" "}
                        <a
                            href="https://modme.uz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ff8000] hover:underline"
                        >
                            https://modme.uz
                        </a>{" "}
                        and take effect from the date of their publication,
                        unless otherwise specified in the text of the
                        amendments.
                    </p>
                    <p>
                        <strong>12.2.3.</strong> Continued use of the Service
                        after the changes take effect constitutes the
                        Customer&rsquo;s acceptance of the new version of the
                        Offer.
                    </p>
                    <p>
                        <strong>12.2.4.</strong> If the Customer does not agree
                        with the changes, they have the right to discontinue
                        use of the Service by notifying the Contractor and
                        ceasing payment for subsequent periods.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-[#181c23] mb-3">
                    12.3. Validity of the Updated Version of the Offer
                </h3>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>12.3.1.</strong> This Offer remains in effect
                        until it is revoked or a new version is published on
                        the Contractor&rsquo;s website.
                    </p>
                    <p>
                        <strong>12.3.2.</strong> The new version of the Offer
                        supersedes all previous versions and applies to all
                        relationships arising after the date of its
                        publication.
                    </p>
                    <p>
                        <strong>12.3.3.</strong> The version of the Offer in
                        effect at the time of payment for the services remains
                        in force until the end of the paid access period,
                        unless otherwise expressly provided for in the new
                        version.
                    </p>
                    <p>
                        <strong>12.3.4.</strong> The Parties acknowledge that
                        if any provision of the Offer and the Agreement becomes
                        invalid during their term, including but not limited to
                        as a result of changes in legislation, the remaining
                        provisions of the Offer and the Agreement shall remain
                        binding on the Parties for the entire duration of their
                        term.
                    </p>
                    <p>
                        <strong>12.3.5.</strong> The Contractor recommends that
                        the Customer regularly review the current version of
                        the Offer and its annexes on the Contractor&rsquo;s
                        website.
                    </p>
                </div>
            </div>
        </div>
    ),
    12: (
        <div className="space-y-6 text-left">
            <div>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>13.1.</strong> The appendices to this Offer are
                        available on the Contractor&rsquo;s official website
                        at:{" "}
                        <a
                            href="https://modme.uz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ff8000] hover:underline"
                        >
                            https://modme.uz
                        </a>{" "}
                        and constitute an integral part thereof. These
                        appendices include:
                    </p>
                    <ul className="ml-6 space-y-2 list-disc">
                        <li>
                            <Link
                                href="/resources/tariffs"
                                className="text-[#ff8000] hover:underline"
                            >
                                Appendix No. 1 &mdash; Rates
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/resources/technical-support-policy"
                                className="text-[#ff8000] hover:underline"
                            >
                                Appendix No. 2 &mdash; Technical Support Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/resources/privacy-and-personal-data-processing-policy"
                                className="text-[#ff8000] hover:underline"
                            >
                                Appendix No. 3 &mdash; Personal Data Processing
                                Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/resources/public-part-of-cybersecurity-policy"
                                className="text-[#ff8000] hover:underline"
                            >
                                Appendix No. 4 &mdash; Cybersecurity Policy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    ),
    13: (
        <div className="space-y-6 text-left">
            <div>
                <div className="space-y-3 text-[#4a5564]">
                    <p>
                        <strong>MODME Limited Liability Company</strong>
                    </p>
                    <p>
                        <strong>Tax ID:</strong> 307442900
                    </p>
                    <p>
                        <strong>Registered Address:</strong> Republic of
                        Uzbekistan, Tashkent, Mirzo-Ulugbek District, Navnikhol
                        MFY, Tepamasjid Street, Building 4a
                    </p>
                    <p>
                        <strong>Bank details:</strong> Account No.:
                        20208000905235041001 at OPERA AKB Capital Bank
                    </p>
                    <p>
                        <strong>Phone:</strong>{" "}
                        <a
                            href="tel:+998787771100"
                            className="text-[#ff8000] hover:underline"
                        >
                            +998 787771100
                        </a>
                    </p>
                    <p>
                        <strong>Email:</strong>{" "}
                        <a
                            href="mailto:crmmodme@gmail.com"
                            className="text-[#ff8000] hover:underline"
                        >
                            crmmodme@gmail.com
                        </a>
                    </p>
                    <p>
                        <strong>Website:</strong>{" "}
                        <a
                            href="https://modme.uz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ff8000] hover:underline"
                        >
                            https://modme.uz
                        </a>
                    </p>
                </div>
            </div>
        </div>
    ),
};

export default function LocalizedOfertaContent() {
    const common = useTranslations("common");
    const t = useTranslations("resources.oferta");
    const [openSections, setOpenSections] = useState<number[]>([]);
    const intro = t.raw("intro") as string[];
    const sections = t.raw("sections") as OfertaSection[];

    const toggleSection = (index: number) => {
        setOpenSections((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <main className="min-h-screen bg-[#fcfcfc] pt-[120px] pb-16 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl shadow-xl border border-[#f0f0f0] p-8 md:p-12"
                >
                    <Link
                        href="/resources"
                        className="inline-flex items-center gap-2 text-[#ff8000] hover:text-[#ff9831] transition-colors mb-6 text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        {common("backToResources")}
                    </Link>

                    <h1 className="text-3xl md:text-4xl font-bold text-[#181c23] mb-8">
                        {t("title")}
                    </h1>

                    <div className="prose prose-lg max-w-none text-[#4a5564] leading-relaxed text-left">
                        <div className="space-y-6">
                            <div className="text-left mb-8">
                                <p className="text-xl font-semibold text-[#181c23] mb-2">
                                    {t("subtitle")}
                                </p>
                                <p className="text-sm text-[#a8a8a8]">
                                    ({t("updatedLabel")} {getCurrentDateEn()})
                                </p>
                            </div>

                            {intro.map((paragraph, idx) => (
                                <p className="text-left" key={idx}>
                                    {paragraph}
                                </p>
                            ))}

                            <div className="bg-[#fff8e8] border-l-4 border-[#ff8000] p-4 rounded-r-lg my-6 text-left">
                                <p className="font-semibold text-[#181c23]">
                                    {t("notice")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 space-y-4">
                        {sections.map((section, index) => {
                            const detailedContent =
                                detailedSectionContents[index];
                            return (
                                <div
                                    key={section.title}
                                    className="border border-[#f0f0f0] rounded-xl overflow-hidden bg-white"
                                >
                                    <button
                                        onClick={() => toggleSection(index)}
                                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#fcfcfc] transition-colors"
                                    >
                                        <span className="text-lg font-semibold text-[#181c23]">
                                            {section.title}
                                        </span>
                                        <motion.div
                                            animate={{
                                                rotate: openSections.includes(
                                                    index
                                                )
                                                    ? 180
                                                    : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="w-5 h-5 text-[#ff8000]" />
                                        </motion.div>
                                    </button>
                                    <AnimatePresence>
                                        {openSections.includes(index) && (
                                            <motion.div
                                                initial={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                }}
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 py-4 border-t border-[#f0f0f0]">
                                                    {detailedContent ? (
                                                        detailedContent
                                                    ) : (
                                                        <div className="space-y-3 text-left text-[#4a5564]">
                                                            {section.paragraphs.map(
                                                                (
                                                                    paragraph,
                                                                    pIdx
                                                                ) => (
                                                                    <p
                                                                        key={
                                                                            pIdx
                                                                        }
                                                                    >
                                                                        {
                                                                            paragraph
                                                                        }
                                                                    </p>
                                                                )
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
