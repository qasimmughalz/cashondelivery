import { Modal } from "@shopify/polaris";
import { useState } from "react";
import { DataState } from "../Context/Context";
import loading from "../img/a.gif";
import "../utils/style.css";
import { Ordermodel } from "../Context/Constants";
export default function OrderModel({ d }) {
  const [active, setActive] = useState(true);
  const { state, dispatch } = DataState();

  const handleChange = () => dispatch({ type: Ordermodel, payload: false });
  const { orderModel } = state;
  console.log(orderModel, "model");

  return (
    <div>
      <Modal open={orderModel} onClose={handleChange} title="Order Status">
        <Modal.Section>
          {d?.order?.confirmed ? (
            <h1>Your Order is Completed</h1>
          ) : (
            <div className="laoding">
              <img
                src={loading}
                width={50}
                height={50}
                className="center"
                alt="Loading...."
              />
            </div>
          )}
        </Modal.Section>
      </Modal>
    </div>
  );
}
