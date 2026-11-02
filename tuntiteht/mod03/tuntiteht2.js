"use strict";

const opiskelija1 = {
    nimi: "jaska",
    op: "120",
    puuttuu_op: function () {
        return 240 - this.op;
    },
}

const opiskelija2 = {
    nimi: "martti",
    op: "75",
    puuttuu_op: function () {
        return 240 - this.op;
    },
}

const opiskelija3 = {
    nimi: "pertti",
    op: "150",
    puuttuu_op: function () {
        return 240 - this.op;
    },
}