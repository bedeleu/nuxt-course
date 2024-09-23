export default defineEventHandler( async (event) => {
    //handle query params
    const { name } = getQuery(event)
    //handle post data
    const { age } =await readBody(event)

    // api call with private key
    const apikey = 'cur_live_8oc2MpVztup6m4mV38dKLPAX53ZngyblUq9yJS94'
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=' + apikey)

    return  data

})