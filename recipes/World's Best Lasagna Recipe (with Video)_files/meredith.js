(function(w, d) {
	"use strict";
	var s1 = d.getElementsByTagName("script")[0],
		s = d.createElement("script"),
		attr,
		pageFn,
		onReady;
	s.src = "//tru.am/scripts/ta-pagesocial-sdk.js";

	attr = function(domQ, name) {
		var l = document.querySelector(domQ);
		if (l) {
			// Use getAttribute() to avoid encoded strings.
			return l.getAttribute(name);
		}
		return undefined;
	};

	pageFn = function() {
		const url = attr('meta[property="og:url"]', "content");
		if (document.location.host.indexOf("marthastewart.com") > -1) {
			const logo = attr("a.image-link.js-image-link", "href");
			if (logo && logo.indexOf("weddings") > -1) {
				return;
			}
		}
		return {
			canonical: url,
			"og:type": "article",
			"og:url": url,
		};
	};

	onReady = function() {
		var l = document.location,
			h = l.hostname.toLowerCase(),
			cid;
		if (h.indexOf("bhg.com") > -1) {
			cid = "693";
		} else if (h.indexOf("parents.com") > -1) {
			cid = "694";
		} else if (h.indexOf("foodandwine.com") > -1) {
			cid = "882";
		} else if (h.indexOf("shape.com") > -1) {
			cid = "711";
		} else if (h.indexOf("myrecipes.com") > -1) {
			cid = "1494";
		} else if (h.indexOf("hellogiggles.com") > -1) {
			cid = "1495";
		} else if (h.indexOf("eatingwell.com") > -1) {
			cid = "1077";
		} else if (h.indexOf("allrecipes.com") > -1) {
			cid = "1069";
		} else if (h.indexOf("cookinglight.com") > -1) {
			cid = "1496";
		} else if (h.indexOf("instyle.com") > -1) {
			cid = "1497";
		} else if (h.indexOf("marthastewart.com") > -1) {
			cid = "1078";
		} else if (h.indexOf("marthastewartweddings.com") > -1) {
			cid = "1164";
		} else if (h.indexOf("health.com") > -1) {
			cid = "1404";
		} else if (h.indexOf("money.com") > -1) {
			cid = "1498";
		} else if (h.indexOf("ew.com") > -1) {
			cid = "1500";
		} else if (h.indexOf("people.com") > -1) {
			cid = ["1564", "1578", "1579", "1580", "1581", "1582", "1590"];
		} else if (h.indexOf("peopleenespanol.com") > -1) {
			cid = "1585";
		} else if (h.indexOf("departures.com") > -1) {
			cid = "1586";
		} else if (h.indexOf("millie.us") > -1) {
			cid = "1587";
		} else if (h.indexOf("dailypaws.com") > -1) {
			cid = "1607";
		} else if (h.indexOf("southernliving.com") > -1) {
			cid = "1499";
		} else if (h.indexOf("realsimple.com") > -1) {
			cid = "1257";
		} else if (h.indexOf("verywellhealth.com") > -1) {
			cid = "1800";
		} else if (h.indexOf("thespruce.com") > -1) {
			cid = "1801";
		} else if (h.indexOf("byrdie.com") > -1) {
			cid = "1802";
		} else if (h.indexOf("travelandleisure.com") > -1) {
			cid = "658";
		} else if (h.indexOf("brides.com") > -1) {
			cid = "1903";
		} else if (h.indexOf("lifewire.com") > -1) {
			cid = "1904";
		} else if (h.indexOf("liquor.com") > -1) {
			cid = "1905";
		} else if (h.indexOf("midwestliving.com") > -1) {
			cid = "1906";
		} else if (h.indexOf("seriouseats.com") > -1) {
			cid = "1907";
		} else if (h.indexOf("simplyrecipes.com") > -1) {
			cid = "1908";
		} else if (h.indexOf("thespruceeats.com") > -1) {
			cid = "1909";
		} else if (h.indexOf("thesprucepets.com") > -1) {
			cid = "1910";
		} else if (h.indexOf("treehugger.com") > -1) {
			cid = "1911";
		} else if (h.indexOf("investopedia.com") > -1) {
          	cid = "2150";
        } else if (h.indexOf("verywellfit.com") > -1) {
          	cid = "2249";
        } else if (h.indexOf("agriculture.com") > -1) {
          	cid = "2300";
        } else if (h.indexOf("woodmagazine.com") > -1) {
          	cid = "3470";
        }
		if (cid) {
			if (cid === "1586" || cid === "1078" || cid === "1607") {
				w.TRUE_ANTHEM.configure(cid, {
					page: pageFn
				});
			} else {
				w.TRUE_ANTHEM.configure(cid);
			}
		}
	};
	if (s.addEventListener) {
		s.addEventListener("load", onReady, false);
	} else {
		s.onreadystatechange = function() {
			if (s.readyState in {
					loaded: 1,
					complete: 1
				}) {
				s.onreadystatechange = null;
				onReady();
			}
		};
	}
	s1.parentNode.insertBefore(s, s1);
})(window, document);