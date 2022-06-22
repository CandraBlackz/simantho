let WS_URL = null;

if (process.env.NODE_ENV === 'development') {
	WS_URL = 'https://simrs.kotamobagukota.go.id/wsv2/'; //WEBSERVICE URL
	//WS_URL = 'https://simanhto.capadesu.space/'; //WEBSERVICE URL
} else {
	WS_URL = 'https://simrs.kotamobagukota.go.id/wsv2/'; //WEBSERVICE URL
}


export { WS_URL };
