const orders = [];

exports.createOrder = (req, res) => {
  const newOrder = req.body;
  orders.push(newOrder);
  res.status(201).send(newOrder);
};

exports.getOrders = (req, res) => {
  res.status(200).send(orders);
};
