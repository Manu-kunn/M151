if (urlParts.includes('delete')) {
    data.addresses = deleteAddress(data.addresses, urlParts[2]);
    redirect(response, '/');