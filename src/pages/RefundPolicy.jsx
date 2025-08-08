function RefundPolicy() {
  return (
    <div className="refund-policy-container  px-4 py-8 mx-auto space-y-4 2xl:w-9/12 xl:w-11/12 xl:px-0">
      <h1 className="pb-8 text-3xl font-medium capitalize border-b border-black/20">
        Refund Policy
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl  mb-2">1. Eligibility for Refunds</h2>
        <p className="mb-2">
          - Refund requests must be made within 7 days of receiving the product
          or service.
        </p>
        <p className="mb-2">
          - To be eligible for a refund, the product must be unused, in the same
          condition you received it, and in its original packaging (if
          applicable).
        </p>
        <p className="mb-2">
          - Services must not have been fully utilized or consumed to qualify
          for a refund.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl  mb-2">2. Non-Refundable Items</h2>
        <p className="mb-2">
          - Products marked as "final sale" or "non-refundable."
        </p>
        <p className="mb-2">- Customized or personalized items.</p>
        <p className="mb-2">
          - Digital downloads or software, once accessed or downloaded.
        </p>
        <p className="mb-2">- Gift cards or vouchers.</p>
        <p className="mb-2">
          - Any service that has already been fully completed.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl  mb-2">3. Process for Refund</h2>
        <p className="mb-2">
          - To initiate a refund, please contact our customer service team at
          info@qubitnets.com with your order number and reason for the refund
          request.
        </p>
        <p className="mb-2">
          - We may require proof of purchase, such as a receipt or invoice.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl  mb-2">4. Refund Approval</h2>
        <p className="mb-2">
          - Once your return or refund request is received and inspected, we
          will notify you of the approval or rejection of your refund.
        </p>
        <p className="mb-2">
          - If approved, your refund will be processed, and a credit will
          automatically be applied to your original method of payment within 7
          days.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl mb-2">5. Late or Missing Refunds</h2>
        <p className="mb-2">
          - If you haven’t received a refund yet, first check your bank account
          again.
        </p>
        <p className="mb-2">
          - Then contact your credit card company; it may take some time before
          your refund is officially posted.
        </p>
        <p className="mb-2">
          - If you’ve done all of this and still have not received your refund,
          please contact us at info@qubitnets.com.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl  mb-2">6. Shipping Costs</h2>
        <p className="mb-2">
          - Shipping costs are non-refundable. If you receive a refund, the cost
          of return shipping will be deducted from your refund unless the refund
          is due to our error (e.g., incorrect or damaged item).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl  mb-2">7. Exchanges</h2>
        <p className="mb-2">
          - We only replace items if they are defective or damaged. If you need
          to exchange an item, contact us at info@qubitnets.com.
        </p>
      </section>
    </div>
  );
}

export default RefundPolicy;
