const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
	"*://vid.pubmatic.com/*",
	"*://*.pubmatic.com/*",
	"*://wf.taboola.com/VideoBidRequestHandlerServlet/*",
	"*://*.taboola.com/*",
	"*://*.spotxchange.com/*",
	"*://ads.stickyadstv.com/*",
	"*://*.stickyadstv.com/*",
	"*://*.lkqd.net/*",
	"*://*.lkqd.net/*",
	"*://vidoomy-d.openx.net/*",
	"*://*.openx.net/*",
	"*://*.vidoomy.com/*",
	"*://tuijian.sogou.com/*",
	"*://search.sohu.com/search/hot/*",
	"*://tuijian.sogou.com/websearch/features/sohu_recommend.jsp",
	"*://quantcast.mgr.consensu.org/*"
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)

