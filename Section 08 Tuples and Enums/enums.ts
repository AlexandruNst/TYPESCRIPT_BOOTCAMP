enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus): boolean {
    return status === OrderStatus.DELIVERED;
}

enum NewOrderStatus {
    PENDING = 10,
    SHIPPED = 34,
    DELIVERED = 324,
    RETURNED = 98
}

enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

ArrowKeys.LEFT;