export const DefaultLayoutConfig = {
    main: {
        type: 'default',
        primaryColor: '#009EF7',
        darkSkinEnabled: true,
    },
    loader: {
        display: true,
        type: 'default', // Set default|spinner-message|spinner-logo to hide or show page loader
    },
    scrolltop: {
        display: true,
    },
    header: {
        display: true,
        width: 'fluid',
        left: 'menu',
        fixed: {
            desktop: true,
            tabletAndMobile: true, // Set true|false to set fixed Header for tablet and mobile modes
        },
        menuIcon: 'svg',
    },
    aside: {
        display: true,
        theme: 'dark',
        menu: 'main',
        fixed: true,
        minimized: false,
        minimize: true,
        hoverable: true,
        menuIcon: 'svg',
    },
    content: {
        width: 'fixed',
        layout: 'default',
    },
    toolbar: {
        display: true,
        width: 'fluid',
        fixed: {
            desktop: true,
            tabletAndMobileMode: true,
        },
        layout: 'toolbar1',
        layouts: {
            toolbar1: {
                height: '55px',
                heightAndTabletMobileMode: '55px',
            },
            toolbar2: {
                height: '75px',
                heightAndTabletMobileMode: '65px',
            },
            toolbar3: {
                height: '55px',
                heightAndTabletMobileMode: '55px',
            },
            toolbar4: {
                height: '65px',
                heightAndTabletMobileMode: '65px',
            },
            toolbar5: {
                height: '75px',
                heightAndTabletMobileMode: '65px',
            },
        },
    },
    footer: {
        width: 'fluid', // Set fixed|fluid to change width type
    },
    pageTitle: {
        display: true,
        breadCrumbs: true,
        description: false,
        layout: 'default',
        direction: 'row',
        responsive: true,
        responsiveBreakpoint: 'lg',
        responsiveTarget: '#kt_toolbar_container',
    },
};
