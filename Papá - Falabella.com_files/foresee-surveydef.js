FSR.surveydefs = [{
    name: 'browse',
    site: 'falabella.com.ar',
    invite: {
        when: 'onentry',
        siteLogo: 'sitelogo_ar.gif',
        dialogs: [[{
            reverseButtons: false,
            headline: "¡Muchas gracias por tus opiniones y comentarios!",
            blurb: "Junto con agradecer tu visita a Falabella.com, te contamos que has sido elegido(a) al azar para participar en una breve encuesta de satisfacción. Tus respuestas nos ayudarán a mejorar tu experiencia en nuestro sitio.",
            noticeAboutSurvey: "Esta encuesta ha sido diseñada para medir cómo ha sido tu experiencia en nuestro sitio; por favor, búscala al <u>finalizar</u> tu visita.",
            attribution: "Esta encuesta es realizada por ForeSee,empresa que presta servicios de consultoría a Falabella.com.",
            closeInviteButtonText: "Haga clic para cerrar.",
            declineButton: "No, Gracias.",
            acceptButton: "Sí, deseo dar mi opinión."
        }]]
    
    },
    pop: {
        when: 'later',
        what: 'qualifier'
    },
    criteria: {
        sp: 20,
        lf: 3
    },
    tracker: {
        url: 'tracker_ar.html'
    },
    qualifier: {
        url: 'qualifying_ar.html'
    
    },
    include: {
        urls: ['.']
    }
}, {
    name: 'browse',
    site: 'falabella.com.co',
    invite: {
        when: 'onentry',
        siteLogo: 'sitelogo_co.gif',
        dialogs: [[{
            reverseButtons: false,
            headline: "¡Muchas gracias por tus opiniones y comentarios!",
            blurb: "Junto con agradecer tu visita a Falabella.com, te contamos que has sido elegido(a) aleatoriamente para participar en una breve encuesta de satisfacción. Tus respuestas nos ayudarán a mejorar tu experiencia en nuestro sitio.",
            noticeAboutSurvey: "Esta encuesta ha sido diseñada para medir cómo ha sido tu experiencia en nuestro sitio; por favor, búscala al <u>finalizar</u> tu visita.",
            attribution: "Esta encuesta es realizada por ForeSee,empresa que presta servicios de consultoría a Falabella.com.",
            closeInviteButtonText: "Has clic para cerrar.",
            declineButton: "No, gracias.",
            acceptButton: "Sí, deseo dar mi opinión."
        }]]
    },
    pop: {
        when: 'later',
        what: 'qualifier'
    },
    criteria: {
        sp: 20,
        lf: 3
    },
    tracker: {
        url: 'tracker_co.html'
    },
    qualifier: {
        url: 'qualifying_co.html'
    },
    include: {
        urls: ['.']
    }
}, {
    name: 'browse',
    site: 'falabella.com.pe',
    invite: {
        when: 'onentry',
        siteLogo: 'sitelogo_pe.gif',
        dialogs: [[{
            reverseButtons: false,
            headline: "¡Le agradecemos sus opiniones y comentarios!",
            blurb: "Agradecemos tu visita a Sagafalabella.com.pe. Te comentamos que has sido elegido(a) al azar para participar en una breve encuesta de satisfacción. Tus respuestas nos ayudarán a mejorar tu experiencia en nuestra página web.",
            noticeAboutSurvey: "Esta encuesta ha sido diseñada para medir cómo ha sido tu experiencia en nuestra página web; por favor, búscala al <u>finalizar</u> tu visita.",
            attribution: "Esta encuesta es realizada por ForeSee,empresa que presta servicios de consultoría a Sagafalabella.com.pe",
            closeInviteButtonText: "Haz clic para cerrar.",
            declineButton: "No, gracias.",
            acceptButton: "Sí, deseo dar mi opinión."
        }]]
    },
    pop: {
        when: 'later',
        what: 'qualifier'
    },
    criteria: {
        sp: 20,
        lf: 3
    },
    tracker: {
        url: 'tracker_pe.html'
    },
    qualifier: {
        url: 'qualifying_pe.html'
    },
    include: {
        urls: ['.']
    }
}, {
    name: 'browse',
    site: 'falabella.com',
    invite: {
        when: 'onentry',
        siteLogo: 'sitelogo_com.gif',
        dialogs: [[{
            reverseButtons: false,
            headline: "¡Muchas gracias por tus opiniones y comentarios!",
            blurb: "Junto con agradecer tu visita a Falabella.com, te contamos que has sido elegido(a) al azar para participar en una breve encuesta de satisfacción. Tus respuestas nos ayudarán a mejorar tu experiencia en nuestro sitio.",
            noticeAboutSurvey: "Esta encuesta ha sido diseñada para medir cómo ha sido tu experiencia en nuestro sitio; por favor, búscala al <u>finalizar</u> tu visita.",
            attribution: "Esta encuesta es realizada por ForeSee,empresa que presta servicios de consultoría a Falabella.com.",
            closeInviteButtonText: "Haga clic para cerrar.",
            declineButton: "No, gracias.",
            acceptButton: "Sí, deseo dar mi opinión."
        }]]
    },
    pop: {
        when: 'later',
        what: 'qualifier'
    },
    criteria: {
        sp: 20,
        lf: 3
    },
    tracker: {
        url: 'tracker_com.html'
    },
    qualifier: {
        url: 'qualifying_com.html'
    },
    include: {
        urls: ['.']
    }
}];
FSR.properties = {
    repeatdays: 90,
    
    repeatoverride: false,
    
    altcookie: {},
    
    language: {
        locale: 'es'
    },
    
    exclude: {},
    
    zIndexPopup: 10000,
    
    ignoreWindowTopCheck: false,
    
    ipexclude: 'fsr$ip',
    
    mobileHeartbeat: {
        delay: 60, /*mobile on exit heartbeat delay seconds*/
        max: 3600 /*mobile on exit heartbeat max run time seconds*/
    },
    
    invite: {
    
        // For no site logo, comment this line:
        siteLogo: "sitelogo.gif",
        
        //alt text fore site logo img
        siteLogoAlt: "",
        
        /* Desktop */
        dialogs: [[{
            reverseButtons: false,
            headline: "¡Le agradecemos sus opiniones y comentarios!",
            blurb: "Le agradecemos su visita a nuestro sitio web. Usted ha sido elegido(a) al azar para participar en una breve encuesta de satisfacción del cliente para informarnos acerca de cómo podemos mejorar su experiencia con nosotros.",
            noticeAboutSurvey: "La encuesta está diseñada para medir toda su experiencia con nosotros; por favor, búsquela al <u>finalizar</u> su visita.",
            attribution: "Esta encuesta se realiza a través de una empresa independiente, ForeSee, en nombre del sitio que usted está visitando.",
            closeInviteButtonText: "Haga clic para cerrar.",
            declineButton: "No, gracias.",
            acceptButton: "Sí, deseo dar mi opinión."
        
        }]],
        
        exclude: {
            urls: ['CJSESSIONID', 'falabella.com$', '/cart/cart.jsp', '/checkout/', '/myaccount/', '/static/staticContent1.jsp'],
            referrers: [],
            userAgents: [],
            browsers: [],
            cookies: [],
            variables: []
        },
        include: {
            local: ['.']
        },
        
        delay: 0,
        timeout: 0,
        
        hideOnClick: false,
        
        hideCloseButton: false,
        
        css: 'foresee-dhtml.css',
        
        hide: [],
        
        hideFlash: true,
        
        type: 'dhtml',
        /* desktop */
        // url: 'invite.html'
        /* mobile */
        url: 'invite-mobile.html',
        back: 'url'
    
        //SurveyMutex: 'SurveyMutex'
    },
    
    tracker: {
        width: '690',
        height: '415',
        timeout: 6,
        pause: 180,
        adjust: true,
        alert: {
            enabled: false,
            message: 'La encuesta ahora está disponible.'
        },
        url: 'tracker.html'
    },
    
    survey: {
        width: 690,
        height: 600
    },
    
    qualifier: {
        footer: '<div div id=\"fsrcontainer\"><div style=\"float:left;width:80%;font-size:8pt;text-align:left;line-height:12px;\">This survey is conducted by an independent company ForeSee,<br>on behalf of the site you are visiting.</div><div style=\"float:right;font-size:8pt;\"><a target="_blank" title="Validate TRUSTe privacy certification" href="//privacy-policy.truste.com/click-with-confidence/ctv/en/www.foreseeresults.com/seal_m"><img border=\"0\" src=\"{%baseHref%}truste.png\" alt=\"Validate TRUSTe Privacy Certification\"></a></div></div>',
        width: '690',
        height: '500',
        bgcolor: '#333',
        opacity: 0.7,
        x: 'center',
        y: 'center',
        delay: 0,
        buttons: {
            accept: 'Continue'
        },
        hideOnClick: false,
        css: 'foresee-dhtml.css',
        url: 'qualifying.html'
    },
    
    cancel: {
        url: 'cancel.html',
        width: '690',
        height: '400'
    },
    
    pop: {
        what: 'survey',
        after: 'leaving-site',
        pu: true,
        tracker: true
    },
    
    meta: {
        referrer: true,
        terms: true,
        ref_url: true,
        url: true,
        url_params: false,
        user_agent: false,
        entry: false,
        entry_params: false
    },
    
    events: {
        enabled: true,
        id: true,
        codes: {
            purchase: 800,
            items: 801,
            dollars: 802,
            followup: 803,
            information: 804,
            content: 805
        },
        pd: 7,
        custom: {}
    },
    
    previous: false,
    
    analytics: {
        google_local: false,
        google_remote: false
    },
    
    cpps: {
        isAuthenticated: {
            source: 'variable',
            init: 'N',
            name: 'isAuth'
        },
        nproducts: {
            source: 'variable',
            init: '0',
            name: 'nproducts'
        },
        tpurchase: {
            source: 'variable',
            init: '0',
            name: 'tpurchase'
        },
        PO_ID: {
            source: 'variable',
            name: 'PO_ID'
        },
        User_ID: {
            source: 'cookie',
            name: 'DYN_USER_ID'
        }
    },
    
    mode: 'first-party'
};
