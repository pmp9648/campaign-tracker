import {
    Component,
    OnInit,
    OnDestroy
} from '@angular/core';

import {
    ActivatedRoute,
    Router
} from '@angular/router';

import {
    Campaign,
    CampaignApi,
    ConfirmDialog,
    SessionEvent,
    GenerateEventForm,
    QuerySource,
    Session,
    SessionApi,
    SessionDialog,
    SessionEventApi
} from 'core';

import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'develop-campaign-route',
    templateUrl: 'develop-campaign.route.html',
    providers: [
        SessionApi,
        SessionEventApi,
    ]
})
export class DevelopCampaignRoute implements OnInit, OnDestroy {
    private id: number;
    sessionSrc: QuerySource<Session>;
    eventSrc: QuerySource<SessionEvent>;
    campaign: Campaign;
    selected = false;
    session: Session;
    sessionEvent: SessionEvent;
    campaignId: number;
    startDate: Date;
    campaignDuration = 0;
    clockDate = new Date();
    hour: number;
    minute: number;


    constructor(
        private dialog: MatDialog,
        private route: ActivatedRoute,
        private router: Router,
        private campaignApi: CampaignApi,
        public sessionApi: SessionApi,
        public eventApi: SessionEventApi,

    ) { }

    private navigate = () => this.router.navigate(['campaigns']);

    private loadSessions = async (id: number) => {
        this.campaign = await this.campaignApi.getByIdAsync(this.id);
        this.campaignId = id;
        this.sessionSrc = this.sessionApi.queryByCampaign(id);
        this.startDate = new Date(this.campaign.campaignStart);
        await this.timeRefresh();
        // let dateMinutes = this.startDate.getTime() / (1000 * 60);

        // dateMinutes = (dateMinutes + this.campaignDuration) - (60 *24 * 13);
    }

    timeRefresh = async () => {
        this.campaignDuration = await this.campaignApi.getDuration(this.campaignId);
        let currentTime = this.time(this.campaignDuration);
        this.hour = currentTime[3].toString();
        this.minute = currentTime[4].toString();
    }
    time = (value: number) => {
        if (!value || value === 0) return '0';
        var units = {
            "year": 24 * 60 * 365,
            "month": 24 * 60 * 30,
            "day": 24 * 60,
            "hour": 60,
            "minute": 1,
        }
        var result = [];
        for (var name in units) {
            var p = Math.floor(value / units[name]);
            result.push(p);
            value %= units[name]
        }

        return result;
    }

    async ngOnInit() {
        this.route.paramMap.subscribe(params => {
            if (params) {
                if (params.has('id')) {
                    this.id = Number(params.get('id'));
                    this.loadSessions(this.id);
                } else
                    this.navigate();
            }
        })

    }

    getCurrent = () => { }

    ngOnDestroy() {
        this.sessionSrc.unsubscribe();
    }

    edit = (session: Session) => this.dialog.open(SessionDialog, {
        data: session,
        disableClose: true,
        width: '400px'
    })
        .afterClosed()
        .subscribe(res => res && this.sessionSrc.forceRefresh());

    editEvent = (event: SessionEvent) => {
        this.sessionEvent = event;
    }

    viewEvent = (event: SessionEvent) => {
        this.sessionEvent = event;
    }

    removeEvent = (event: SessionEvent) => {
        this.dialog.open(ConfirmDialog, {
            data: {
                title: `Remove ${event.title}`,
                content: `Are you sure you want to remove ${event.title}?`
            },
            disableClose: true,
            autoFocus: false
        })
            .afterClosed()
            .subscribe(async result => {
                if (result) {
                    const res = await this.eventApi.remove(event);
                    if (res) {
                        this.eventSrc.forceRefresh();
                        this.sessionSrc.forceRefresh();
                    }
                }
            })

    }

    addEvent = (sessionId: number) => {
        this.sessionEvent = null
        this.sessionEvent = {
            sessionId: sessionId
        } as SessionEvent;
    }

    saveEvent = async (res: SessionEvent) => {
        if (res) {
            this.eventSrc.forceRefresh();
            this.sessionSrc = this.sessionApi.queryByCampaign(this.campaignId);
            await this.timeRefresh();
        }
    }

    addSession = () => this.dialog.open(SessionDialog, {
        data: { campaignId: this.id } as Session,
        disableClose: true,
        width: '400px',
        autoFocus: false
    })
        .afterClosed()
        .subscribe(res => res && this.sessionSrc.forceRefresh());

    view = (s: Session) => {
        this.selected = !this.selected;
        this.session = s;
        this.eventSrc = this.eventApi.queryBySession(s.id);
    }

    remove = (s: Session) => this.dialog.open(ConfirmDialog, {
        data: {
            title: `Remove ${s.title}`,
            content: `Are you sure you want to remove ${s.title}?`
        },
        disableClose: true,
        autoFocus: false
    })
        .afterClosed()
        .subscribe(async result => {
            if (result) {
                const res = await this.sessionApi.remove(s);
                res && this.sessionSrc.forceRefresh();
            }
        })
}
