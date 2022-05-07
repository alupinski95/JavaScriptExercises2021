

const moveDirection = {
    upLeft: { key: "upLeft", vector: [-1, -1] },
    upRight: { key: "upRight", vector: [-1, 1] },
    leftBottom: { key: "leftBottom", vector: [1, -1] },
    rightBottom: { key: "rightBottom", vector: [1, 1] },
};
const posibleBounce = {
    corners: {
        upLeft: { "upLeft": moveDirection.rightBottom },
        leftBottom: { "leftBottom": moveDirection.upRight },
        upRight: { "upRight": moveDirection.leftBottom },
        rightBottom: { "rightBottom": moveDirection.upLeft }
    },
    xBorder: {
        left: {
            "upLeft": moveDirection.upRight,
            "leftBottom": moveDirection.rightBottom,
        },
        right: {
            "upRight": moveDirection.upLeft,
            "rightBottom": moveDirection.leftBottom,
        }
    },
    yBorder: {
        top: {
            "upLeft": moveDirection.leftBottom,
            "upRight": moveDirection.rightBottom,
        },
        bottom: {
            "rightBottom": moveDirection.upRight,
            "leftBottom": moveDirection.upLeft,
        }
    }
};

const vectorByChcecksum = {
    0: null,
    210: posibleBounce.corners.upLeft,
    77: posibleBounce.corners.upLeft,
    9: posibleBounce.corners.upLeft,
    177: posibleBounce.corners.upLeft,
    110: posibleBounce.corners.upLeft,

    299: posibleBounce.corners.upRight,
    137: posibleBounce.corners.upRight,
    33: posibleBounce.corners.upRight,
    146: posibleBounce.corners.upRight,
    290: posibleBounce.corners.upRight,

    438: posibleBounce.corners.leftBottom,
    276: posibleBounce.corners.leftBottom,
    100: posibleBounce.corners.leftBottom,
    285: posibleBounce.corners.leftBottom,
    429: posibleBounce.corners.leftBottom,

    498: posibleBounce.corners.rightBottom,
    365: posibleBounce.corners.rightBottom,
    153: posibleBounce.corners.rightBottom,
    465: posibleBounce.corners.rightBottom,
    398: posibleBounce.corners.rightBottom,

    157: posibleBounce.xBorder.left,
    57: posibleBounce.xBorder.left,
    148: posibleBounce.xBorder.left,

    270: posibleBounce.xBorder.right,
    117: posibleBounce.xBorder.right,
    237: posibleBounce.xBorder.right,

    62: posibleBounce.yBorder.top,
    29: posibleBounce.yBorder.top,
    53: posibleBounce.yBorder.top,

    281: posibleBounce.yBorder.bottom,
    228: posibleBounce.yBorder.bottom,
    381: posibleBounce.yBorder.bottom,

    128: posibleBounce.yBorder.bottom,
    20: posibleBounce.yBorder.top,
    84: posibleBounce.xBorder.right,
    48: posibleBounce.xBorder.left,
}

export {
    moveDirection,vectorByChcecksum,posibleBounce
};