import React, { useState } from "react";
import PageTitleImage from "../components/PageTitleImage";


const Terms = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <PageTitleImage
        title="TERMS & CONDITIONS"
        subtitle="Please read our policies carefully before using our services"
        image="/assets/images/Gold-jwellery/slider-24.jpg"
        buttonText="Contact Support"
        buttonLink="/contact"
      />

      <section className="flat-spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <ul className="faq-list">
                <li className="faq-item" id="myAccount">
                  <h2 className="faq_title">My Account – Injila</h2>
                  <div className="faq_wrap" id="my-account">
                    {/* Accordion 1 */}
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#forgot-pass"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="forgot-pass"
                      >
                        <span className="text h5">
                          1. What can I do if I forgot my password?
                        </span>
                        <span className="icon">
                          <span className="ic-accordion-custom"></span>
                        </span>
                      </div>
                      <div
                        id="forgot-pass"
                        className="collapse"
                        data-bs-parent="#my-account"
                      >
                        <div className="accordion-body">
                          <p className="h6">
                            Click on “Forgot Password” at login, enter your registered email, and we’ll send you a reset link instantly.
                          </p>

                        </div>
                      </div>
                    </div>

                    {/* Accordion 2 */}
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila2"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila2"
                      >
                        <span className="text h5">
                          How do I update my personal details?
                        </span>
                        <span className="icon">
                          <span className="ic-accordion-custom"></span>
                        </span>
                      </div>
                      <div id="injila2" className="collapse" data-bs-parent="#my-account">
                        <div className="accordion-body">
                          <p className="h6">
                            Log in to your Injila account and visit the “My Profile” section to update your name, address, or contact information.
                          </p>

                        </div>
                      </div>
                    </div>

                    {/* Accordion 3 */}
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila3"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila3"
                      >
                        <span className="text h5">
                          Can I view my past orders?
                        </span>
                        <span className="icon">
                          <span className="ic-accordion-custom"></span>
                        </span>
                      </div>
                      <div id="injila3" className="collapse" data-bs-parent="#my-account">
                        <div className="accordion-body">
                          <p className="h6">
                            Yes! All your previous orders are saved under the “Order History” section in your dashboard.
                          </p>

                        </div>
                      </div>
                    </div>

                    {/* Accordion 4 */}
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila4"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="injila4"
                      >
                        How do I change my email or phone number?
                        <span className="icon">
                          <span className="ic-accordion-custom"></span>
                        </span>
                      </div>
                      <div
                        id="injila4"
                        className="collapse"
                        data-bs-parent="#my-account"
                      >
                        <div className="accordion-body">
                          <p className="h6">
                            Go to “Account Settings” and update your new email or phone number. Make sure to verify any changes for security.
                          </p>

                        </div>
                      </div>
                    </div>

                    {/* Accordion 5 */}
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila5"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila5"
                      >
                        <span className="text h5">
                          Is my personal information secure?
                        </span>
                        <span className="icon">
                          <span className="ic-accordion-custom"></span>
                        </span>
                      </div>
                      <div id="injila5" className="collapse" data-bs-parent="#my-account">
                        <div className="accordion-body">
                          <p className="h6">
                            Absolutely. Injila uses encrypted technology to keep your personal and payment information completely safe.
                          </p>

                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="faq-item" id="ordersPurchases">
                  <h2 className="faq_title">Orders & Purchases – Injila FAQs</h2>
                  <div className="faq_wrap" id="order-and-purchase">
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila2-1"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila2-1"
                      >
                        <span className="text h5">
                          How do I place an order on Injila?
                        </span>
                        <span className="icon">
                          <span className="ic-accordion-custom"></span>
                        </span>
                      </div>
                      <div id="injila2-1" className="collapse" data-bs-parent="#order-and-purchase">
                        <div className="accordion-body">
                          <p className="h6">
                            Select your favorite jewellery piece, add it to the cart, fill in your details, and complete the secure checkout.
                          </p>

                        </div>
                      </div>
                    </div>

                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila2-2"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila2-2"
                      >
                        <span className="text h5">
                          Can I modify my order after placing it?
                        </span>
                        <span className="icon">
                          <span className="ic-accordion-custom"></span>
                        </span>
                      </div>
                      <div id="injila2-2" className="collapse" data-bs-parent="#order-and-purchase">
                        <div className="accordion-body">
                          <p className="h6">
                            Orders can be modified within the first 1 hour. Contact our support team immediately through chat or email.
                          </p>

                        </div>
                      </div>
                    </div>

                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila2-3"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila2-3"
                      >
                        <span className="text h5">What payment methods do you accept?</span>
                        <span className="icon">
                          <span className="ic-accordion-custom"></span>
                        </span>
                      </div>
                      <div id="injila2-3" className="collapse" data-bs-parent="#order-and-purchase">
                        <div className="accordion-body">
                          <p className="h6">
                            Injila accepts UPI, Credit/Debit Cards, Net Banking, and Wallet Payments.
                          </p>

                        </div>
                      </div>
                    </div>

                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila2-4"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila2-4"
                      >
                        <span className="text h5">Will I receive an order confirmation?</span>
                        <span className="icon">
                          <span className="ic-accordion-custom"></span>
                        </span>
                      </div>
                      <div id="injila2-4" className="collapse" data-bs-parent="#order-and-purchase">
                        <div className="accordion-body">
                          <p className="h6">
                            Yes, you will receive an email and SMS confirmation right after your purchase.
                          </p>

                        </div>
                      </div>
                    </div>

                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila2-5"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila2-5"
                      >
                        <span className="text h5">
                          Do prices include taxes?
                        </span>
                        <span className="icon">
                          <span className="ic-accordion-custom"></span>
                        </span>
                      </div>
                      <div id="injila2-5" className="collapse" data-bs-parent="#order-and-purchase">
                        <div className="accordion-body">
                          <p className="h6">
                            <p className="h6">
                              Yes, all prices displayed on Injila include GST and applicable taxes.
                            </p>

                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="faq-item" id="returnsRefunds">
                  <h2 className="faq_title">Returns & Refunds – Injila FAQs</h2>
                  <div className="faq_wrap" id="return-and-refund">
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila3-1"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila3-1"
                      >
                        <span className="text h5">What is Injila’s return policy?</span>
                        <span className="icon">
                          <span className="ic-accordion-custom"></span>
                        </span>
                      </div>
                      <div id="injila3-1" className="collapse" data-bs-parent="#return-and-refund">
                        <div className="accordion-body">
                          <p className="h6">
                            Injila offers a 7-day return policy for unworn, undamaged items with original packaging.
                          </p>

                        </div>
                      </div>
                    </div>

                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila3-2"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila3-2"
                      >
                        <span className="text h5">How do I request a return?</span>
                        <span className="icon">
                          <span className="ic-accordion-custom"></span>
                        </span>
                      </div>
                      <div id="injila3-2" className="collapse" data-bs-parent="#return-and-refund">
                        <div className="accordion-body">
                          <p className="h6">
                            Go to “My Orders,” select the item, and click “Request Return.” Our team will guide you through the process.
                          </p>

                        </div>
                      </div>
                    </div>

                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila3-3"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila3-3"
                      >
                        <span className="text h5">How long does the refund take?</span>
                        <span className="icon">
                          <span className="ic-accordion-custom"></span>
                        </span>
                      </div>
                      <div id="injila3-3" className="collapse" data-bs-parent="#return-and-refund">
                        <div className="accordion-body">
                          <p className="h6">
                            Refunds are processed within 5–7 working days once the item is received and inspected.
                          </p>

                        </div>
                      </div>
                    </div>

                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila3-4"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila3-4"
                      >
                        <span className="text h5">
                          Can I exchange an item instead of returning it?
                        </span>
                        <span className="icon">
                          <span className="ic-accordion-custom"></span>
                        </span>
                      </div>
                      <div id="injila3-4" className="collapse" data-bs-parent="#return-and-refund">
                        <div className="accordion-body">
                          <p className="h6">
                            Yes, exchanges are allowed for size or design within 7 days of delivery.
                          </p>

                        </div>
                      </div>
                    </div>

                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila3-5"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila3-5"
                      >
                        <span className="text h5">What if I receive a damaged product?</span>
                        <span className="icon">
                          <span className="ic-accordion-custom"></span>
                        </span>
                      </div>
                      <div id="injila3-5" className="collapse" data-bs-parent="#return-and-refund">
                        <div className="accordion-body">
                          <p className="h6">
                            In the rare case of damage, contact us within 24 hours with photos, and we’ll replace it for free.
                          </p>

                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="faq-item" id="shippingTracking">
                  <h2 className="faq_title">Shipping & Tracking – Injila FAQs</h2>
                  <div className="faq_wrap" id="shipping-and-tracking">
                    {/* FAQ 1 */}
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila6-1"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila6-1"
                      >
                        <span className="text h5">
                          How long does shipping take?
                        </span>
                        <span className="icon">
                          <span className="ic-accordion-custom"></span>
                        </span>
                      </div>
                      <div
                        id="injila6-1"
                        className="collapse"
                        data-bs-parent="#shipping-and-tracking"
                      >
                        <div className="accordion-body">
                          <p className="h6">
                            Orders are shipped within 1–2 working days and typically delivered in 3–5 days depending on your location.
                          </p>

                        </div>
                      </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila6-2"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila6-2"
                      >
                        <span className="text h5">
                          How can I track my order?
                        </span>
                        <span className="icon">
                          <span className="ic-accordion-custom"></span>
                        </span>
                      </div>
                      <div
                        id="injila6-2"
                        className="collapse"
                        data-bs-parent="#shipping-and-tracking"
                      >
                        <div className="accordion-body">
                          <p className="h6">
                            Once shipped, you’ll receive a tracking link via email and SMS to check your order status anytime.
                          </p>
                          s
                        </div>
                      </div>
                    </div>

                    {/* FAQ 3 */}
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila6-3"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila6-3"
                      >
                        <span className="text h5">
                          Do you offer free shipping?
                        </span>
                        <span className="icon">
                          <span className="ic-accordion-custom"></span>
                        </span>
                      </div>
                      <div
                        id="injila6-3"
                        className="collapse"
                        data-bs-parent="#shipping-and-tracking"
                      >
                        <div className="accordion-body">
                          <p className="h6">
                            Yes! Injila offers free shipping on all orders across India.
                          </p>

                        </div>
                      </div>
                    </div>

                    {/* FAQ 4 */}
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila6-4"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila6-4"
                      >
                        <span className="text h5">
                          What courier partners do you use?
                        </span>
                        <span className="icon">
                          <span className="ic-accordion-custom"></span>
                        </span>
                      </div>
                      <div
                        id="injila6-4"
                        className="collapse"
                        data-bs-parent="#shipping-and-tracking"
                      >
                        <div className="accordion-body">
                          <p className="h6">
                            We ship through trusted partners like BlueDart, Delhivery, and Xpressbees for fast and safe delivery.
                          </p>

                        </div>
                      </div>
                    </div>

                    {/* FAQ 5 */}
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila6-5"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila6-5"
                      >
                        <span className="text h5">
                          Can I change my delivery address after placing the order?
                        </span>
                        <span className="icon">
                          <span className="ic-accordion-custom"></span>
                        </span>
                      </div>
                      <div
                        id="injila6-5"
                        className="collapse"
                        data-bs-parent="#shipping-and-tracking"
                      >
                        <div className="accordion-body">
                          <p className="h6">
                            Address changes are possible before the order is shipped. Contact support as soon as possible.
                          </p>

                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="faq-item" id="feesBilling">
                  <h2 className="faq_title">Fees & Billing</h2>
                  <div className="faq_wrap" id="fee-and-bill">

                    {/* FAQ 1 */}
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila4-1"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila4-1"
                      >
                        <span className="text h5">
                          1. Are there any additional charges on my order?
                        </span>
                        <span className="icon"><span className="ic-accordion-custom"></span></span>
                      </div>
                      <div id="injila4-1" className="collapse" data-bs-parent="#fee-and-bill">
                        <div className="accordion-body">
                          <p className="h6">
                            At Injila, product prices are all-inclusive of GST. No hidden fees are
                            added at checkout, except for selected premium packaging requests.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila4-2"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila4-2"
                      >
                        <span className="text h5">
                          2. What payment methods does Injila accept?
                        </span>
                        <span className="icon"><span className="ic-accordion-custom"></span></span>
                      </div>
                      <div id="injila4-2" className="collapse" data-bs-parent="#fee-and-bill">
                        <div className="accordion-body">
                          <p className="h6">
                            We accept UPI, credit/debit cards, net banking, and wallet payments.
                            All transactions are processed through secure and trusted gateways.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FAQ 3 */}
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila4-3"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila4-3"
                      >
                        <span className="text h5">
                          3. Why was my payment declined?
                        </span>
                        <span className="icon"><span className="ic-accordion-custom"></span></span>
                      </div>
                      <div id="injila4-3" className="collapse" data-bs-parent="#fee-and-bill">
                        <div className="accordion-body">
                          <p className="h6">
                            Payments may fail due to network issues, incorrect card details, or
                            insufficient balance. If the amount is deducted, it is automatically
                            refunded within 3–5 business days.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FAQ 4 */}
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila4-4"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila4-4"
                      >
                        <span className="text h5">
                          4. How do I get a copy of my invoice?
                        </span>
                        <span className="icon"><span className="ic-accordion-custom"></span></span>
                      </div>
                      <div id="injila4-4" className="collapse" data-bs-parent="#fee-and-bill">
                        <div className="accordion-body">
                          <p className="h6">
                            Your invoice is sent via email immediately after your purchase. You
                            can also download it anytime from the “Order History” section.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FAQ 5 */}
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila4-5"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila4-5"
                      >
                        <span className="text h5">
                          5. What happens if my refund is delayed?
                        </span>
                        <span className="icon"><span className="ic-accordion-custom"></span></span>
                      </div>
                      <div id="injila4-5" className="collapse" data-bs-parent="#fee-and-bill">
                        <div className="accordion-body">
                          <p className="h6">
                            Refunds usually reflect within 5–7 working days. If delayed, please
                            contact our support team with your order ID, and we’ll assist you
                            immediately.
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </li>
                <li className="faq-item" id="otherTopic">
                  <h2 className="faq_title">Other Topics</h2>
                  <div className="faq_wrap" id="orther-topic">

                    {/* FAQ 1 */}
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila5-1"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila5-1"
                      >
                        <span className="text h5">
                          1. Are Injila products hypoallergenic?
                        </span>
                        <span className="icon"><span className="ic-accordion-custom"></span></span>
                      </div>
                      <div id="injila5-1" className="collapse" data-bs-parent="#orther-topic">
                        <div className="accordion-body">
                          <p className="h6">
                            Yes. Our jewellery is made using skin-safe materials, ensuring maximum
                            comfort even for sensitive skin.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FAQ 2 */}
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila5-2"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila5-2"
                      >
                        <span className="text h5">
                          2. How do I take care of my Injila jewellery?
                        </span>
                        <span className="icon"><span className="ic-accordion-custom"></span></span>
                      </div>
                      <div id="injila5-2" className="collapse" data-bs-parent="#orther-topic">
                        <div className="accordion-body">
                          <p className="h6">
                            Store your jewellery in a dry pouch, avoid perfumes directly on it,
                            and wipe gently with a soft cloth after wearing.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FAQ 3 */}
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila5-3"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila5-3"
                      >
                        <span className="text h5">
                          3. Do Injila products come with a warranty?
                        </span>
                        <span className="icon"><span className="ic-accordion-custom"></span></span>
                      </div>
                      <div id="injila5-3" className="collapse" data-bs-parent="#orther-topic">
                        <div className="accordion-body">
                          <p className="h6">
                            Yes. Core jewellery collections come with a 6-month manufacturing
                            defect warranty.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FAQ 4 */}
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila5-4"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila5-4"
                      >
                        <span className="text h5">
                          4. Do you offer gift packaging?
                        </span>
                        <span className="icon"><span className="ic-accordion-custom"></span></span>
                      </div>
                      <div id="injila5-4" className="collapse" data-bs-parent="#orther-topic">
                        <div className="accordion-body">
                          <p className="h6">
                            Yes! Injila provides elegant premium gift packaging, perfect for
                            weddings, festivals, and special occasions.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* FAQ 5 */}
                    <div className="accordion-faq accor-mn-pl">
                      <div
                        className="accordion-title collapsed"
                        data-bs-target="#injila5-5"
                        role="button"
                        data-bs-toggle="collapse"
                        aria-expanded="false"
                        aria-controls="injila5-5"
                      >
                        <span className="text h5">
                          5. Can I customize jewellery?
                        </span>
                        <span className="icon"><span className="ic-accordion-custom"></span></span>
                      </div>
                      <div id="injila5-5" className="collapse" data-bs-parent="#orther-topic">
                        <div className="accordion-body">
                          <p className="h6">
                            Selected jewellery pieces can be customized based on size, color, or
                            stone preference. Contact our support team for details.
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </li>



              </ul>
            </div>


            <div className="col-lg-3 d-none d-lg-block">
              <div
                className="blog-sidebar sidebar-content-wrap sticky-top"
                style={{ top: "15px" }}
              >
                {/* Search Section */}
                <div className="sidebar-item">
                  <h4 className="sb-title">Frequently Asked Questions</h4>
                  <form className="form-search_faq style-btn-abs-end">
                    <input
                      className="style-stroke"
                      type="text"
                      placeholder="Search your question..."
                      required
                    />
                    <button className="btn-submit link" type="submit">
                      <i className="icon icon-magnifying-glass"></i>
                    </button>
                  </form>
                </div>

                {/* Category Section */}
                <div className="sidebar-item">
                  <h4 className="sb-title">Categories</h4>
                  <ul className="sb-category">
                    <li>
                      <a href="myaccount" className="h6 link">
                        My Account
                      </a>
                    </li>
                    <li>
                      <a href="orderspurchases" className="h6 link">
                        Orders & Payments
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Banner Section */}
                <div className="sidebar-item">
                  <div className="sb-banner hover-img">
                    <a href="/product" className="image img-style">
                      <img
                        src="assets/images/Gold-jwellery/jhumki-style-5.jpeg"
                        alt="banner"
                      />
                    </a>
                    <div className="content">
                      <h5 className="sub-title text-primary">Exclusive Offer</h5>
                      <h2 className="fw-semibold title">
                        <a href="#" className="text-white link">
                          Premium Gold & Diamond Collection
                        </a>
                      </h2>
                      <a
                        href="/product"
                        className="tf-btn btn-white animate-btn animate-dark"
                      >
                        Shop Now
                        <i className="icon icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>




          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
