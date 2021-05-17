/**
 * @name RandomDog
 * @description Get a dog from Random.dog
 * @copyright 2021
 * @license MIT
*/

const got = require("got")

module.exports = function randomdog() {
    got("https://random.dog/woof.json").then(output =>{
        json = JSON.parse(output.body)
        return json.url
    }).catch(() => {
        throw new Error("[randomdog] The site is currently offline.")
    })
}