export const convertToMinutes = (step, postfix) => {
    switch (postfix) {
        case 'hour':
            return step * 60
        case 'day':
            return step * 1440
        case 'month':
            return step * 43200
        default:
            return step
    }
}

export const generateURL = (url, params) => {
    const urlWithParams = new URL(url)
    params.bbo.map(obj => (
        urlWithParams.searchParams.append(`bbo_id`, obj)
    ))
    urlWithParams.searchParams.append("name", params.params);
    urlWithParams.searchParams.append("first_date", params.datetime[0].format('YYYY-MM-DD HH:mm').toString());
    urlWithParams.searchParams.append("last_date", params.datetime[1].format('YYYY-MM-DD HH:mm').toString());

    console.log(urlWithParams.href)
    return urlWithParams.href
}
