import {Component, OnInit} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-menu',
    template: `
        <ul class="layout-menu">
            <li app-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true"></li>
        </ul>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public app: AppComponent) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Home', icon: 'pi pi-fw pi-home',
                items: [
                    {label: 'Home-Feed', icon: 'pi pi-fw pi-home', routerLink: ['/']}
                ]
            },
            {
                label: 'NBA', icon: 'pi pi-fw pi-star-fill', routerLink: ['/uikit'],
                items: [
                    {
                        label: 'Eastern Conference', icon: 'pi pi-fw pi-align-left',
                        items: [
                            {label: 'Boston Celtics', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Brooklyn Nets', icon: 'pi pi-fw pi-align-left'},
                            {label: 'New York Knicks', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Philadelphia 76ers', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Toronto Raptors', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Chicago Bulls', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Cleveland Cavaliers', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Detroit Pistons', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Indiana Pacers', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Milwaukee Bucks', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Atlanta Hawks', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Charlotte Hornets', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Miami Heat', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Orlando Magic', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Washington Wizards', icon: 'pi pi-fw pi-align-left'}
                        ]
                    },
                    {
                        label: 'Western Conference', icon: 'pi pi-fw pi-align-left',
                        items: [
                            {label: 'Denver Nuggets', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Minnesota Timberwolves', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Oklahoma City Thunder', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Portland Trail Blazers', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Utah Jazz', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Golden State Warriors', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Los Angeles Clippers', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Los Angeles Lakers', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Phoenix Suns', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Sacramento Kings', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Dallas Mavericks', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Houston Rockets', icon: 'pi pi-fw pi-align-left'},
                            {label: 'Memphis Grizzlies', icon: 'pi pi-fw pi-align-left'},
                            {label: 'New Orleans Pelicans', icon: 'pi pi-fw pi-align-left'},
                            {label: 'San Antonio Spurs', icon: 'pi pi-fw pi-align-left'}
                        ]
                    },
                    /*{label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout']},
                    {label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input']},
                    {label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel']},
                    {label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate']},
                    {label: 'Button', icon: 'pi pi-fw pi-mobile', routerLink: ['/uikit/button'], class: 'rotated-icon'},
                    {label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table']},
                    {label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list']},
                    {label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree']},
                    {label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel']},
                    {label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay']},
                    {label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media']},
                    {label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], preventExact: true},
                    {label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message']},
                    {label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file']},
                    {label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts']},
                    {label: 'Misc', icon: 'pi pi-fw pi-circle-off', routerLink: ['/uikit/misc']}*/
                ]
            },
            {
                label:'Euroleague', icon:'pi pi-fw pi-prime', routerLink: ['/blocks'],
                items:[
                    {label: 'Tabelle', icon: 'pi pi-fw pi-circle-off', routerLink: ['/uikit/misc']},
                    {label: 'Teams', icon: 'pi pi-fw pi-circle-off', routerLink: ['/uikit/misc']},
                    {label: 'Spiele', icon: 'pi pi-fw pi-circle-off', routerLink: ['/uikit/misc']},
                    {label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks']},
                    {label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank'},
                ]
            },
            {
                label: 'Utilities', icon: 'pi pi-fw pi-compass', routerLink: ['/utilities'],
                items: [
                    {label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['utilities/icons']},
                    {label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank'},
                ]
            },
            {
                label: 'Pages', icon: 'pi pi-fw pi-briefcase', routerLink: ['/pages'],
                items: [
                    {label: 'Crud', icon: 'pi pi-fw pi-pencil', routerLink: ['/pages/crud']},
                    {label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', routerLink: ['/pages/calendar']},
                    {label: 'Timeline', icon: 'pi pi-fw pi-calendar', routerLink: ['/pages/timeline']},
                    {label: 'Landing', icon: 'pi pi-fw pi-globe', url: 'assets/pages/landing.html', target: '_blank'},
                    {label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: ['/login']},
                    {label: 'Invoice', icon: 'pi pi-fw pi-dollar', routerLink: ['/pages/invoice']},
                    {label: 'Help', icon: 'pi pi-fw pi-question-circle', routerLink: ['/pages/help']},
                    {label: 'Error', icon: 'pi pi-fw pi-times-circle', routerLink: ['/error']},
                    {label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/notfound']},
                    {label: 'Access Denied', icon: 'pi pi-fw pi-lock', routerLink: ['/access']},
                    {label: 'Empty', icon: 'pi pi-fw pi-circle-off', routerLink: ['/pages/empty']}
                ]
            },
            {
                label: 'Hierarchy', icon: 'pi pi-fw pi-align-left',
                items: [
                    {
                        label: 'Submenu 1', icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-align-left'},
                                    {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-align-left'},
                                    {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-align-left'},
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-align-left'}
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'pi pi-fw pi-align-left',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-align-left'},
                                    {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-align-left'},
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-align-left',
                                items: [
                                    {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-align-left'},
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                label: 'Start', icon: 'pi pi-fw pi-download',
                items: [
                    {
                        label: 'Buy Now', icon: 'pi pi-fw pi-shopping-cart', url: ['https://www.primefaces.org/store']
                    },
                    {
                        label: 'Documentation', icon: 'pi pi-fw pi-info-circle', routerLink: ['/documentation']
                    }
                ]
            }
        ];
    }
}
