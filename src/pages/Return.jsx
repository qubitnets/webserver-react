function Return() {
  return (
    <div className="return-policy-container px-4 py-8 mx-auto space-y-4 2xl:w-9/12 xl:w-11/12 xl:px-0">
      <h1 className="text-3xl font-bold pb-8 capitalize border-b border-black/20">
        Return Policy
      </h1>

      <p className="mb-6">
        At <strong>QubitNets</strong>, we strive to provide high-quality
        products and services to our customers. If you are not completely
        satisfied with your purchase, we are here to help. Please review the
        following terms and conditions regarding our return policy.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl mb-2">1. Returns</h2>
        <p>
          You have 7 days from the date you received your item to request a
          return. To be eligible for a return, the item must be in the same
          condition that you received it, unused, and in its original packaging.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl mb-2">2. Non-Returnable Items</h2>
        <p>Some items are not eligible for return. These include:</p>
        <ul className="list-disc ml-6">
          <li>Items marked as "final sale" or "non-returnable."</li>
          <li>Customized or personalized items.</li>
          <li>Digital products, such as software or downloadable goods.</li>
          <li>Gift cards.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl mb-2">3. Return Process</h2>
        <p>
          To initiate a return, please contact our customer support at{" "}
          <strong>info@qubitnets.com</strong> with your order number and the
          reason for the return.
        </p>
        <p>
          Once we receive your return request, we will provide instructions on
          how to return your item. Please ensure the item is securely packaged.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl mb-2">4. Return Shipping</h2>
        <p>
          Customers are responsible for return shipping costs unless the item
          was damaged or incorrect. If you receive a defective or incorrect
          product, return shipping costs will be covered by QubitNets.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl mb-2">5. Refunds</h2>
        <p>
          Once we receive your return, we will inspect the item and notify you
          of the status of your refund. If approved, your refund will be
          processed, and a credit will be applied to your original method of
          payment within <strong>7</strong> business days.
        </p>
        <p>Please note that original shipping costs are non-refundable.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl mb-2">6. Late or Missing Refunds</h2>
        <p>
          If you haven’t received a refund yet, first check your bank account
          again. Then, contact your credit card company, as it may take some
          time before your refund is officially posted.
        </p>
        <p>
          If you have done all of this and still have not received your refund,
          please contact us at <strong>info@qubitnets.com</strong>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl mb-2">7. Exchanges</h2>
        <p>
          We only replace items if they are defective or damaged. If you need to
          exchange an item, please contact us at{" "}
          <strong>info@qubitnets.com</strong>.
        </p>
      </section>
    </div>
  );
}

export default Return;
