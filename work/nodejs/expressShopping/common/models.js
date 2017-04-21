/**
 * Created by LvHongwang on 2017-04-08.
 */
module.exports = {
    user: {
        name: { type: String, required: true },
        password: { type: String, required: true },
        gender: { type: Boolean, default: true }
    }
};