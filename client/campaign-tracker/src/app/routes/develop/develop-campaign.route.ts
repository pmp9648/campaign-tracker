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
    QuerySource,
    Session,
    SessionApi,
    SessionDialog
} from 'core';

import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'develop-campaign-route',
    templateUrl: 'develop-campaign.route.html',
    providers: [SessionApi]
})
export class DevelopCampaignRoute implements OnInit, OnDestroy {
    private id: number;
    sessionSrc: QuerySource<Session>;
    campaign: Campaign;

    constructor(
        private dialog: MatDialog,
        private route: ActivatedRoute,
        private router: Router,
        public sessionApi: SessionApi,
        private campaignApi: CampaignApi
    ) { }

    private navigate = () => this.router.navigate(['campaigns']);

    private loadSessions = async (id: number) => {
        this.campaign = await this.campaignApi.find(this.id);
        this.sessionSrc = this.sessionApi.queryByCampaign(id);
    }

    ngOnInit() {
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

    ngOnDestroy() {
        this.sessionSrc.unsubscribe();
    }

    editSession = (session: Session) => this.dialog.open(SessionDialog, {
        data: session,
        disableClose: true,
        width: '400px'
    })
        .afterClosed()
        .subscribe(res => res && this.sessionSrc.forceRefresh());

    addSession = () => this.dialog.open(SessionDialog, {
        data: { campaignId: this.id } as Session,
        disableClose: true,
        width: '400px',
        autoFocus: false
    })
        .afterClosed()
        .subscribe(res => res && this.sessionSrc.forceRefresh());

    // removeSession = (p: PlaneModel) => this.dialog.open(ConfirmDialog, {
    //     data: {
    //         title: `Remove ${p.name}`,
    //         content: `Are you sure you want to remove ${p.name} (and all of its passengers) from the manifest?`
    //     },
    //     disableClose: true,
    //     autoFocus: false
    // })
    //     .afterClosed()
    //     .subscribe(async result => {
    //         if (result) {
    //             const res = await this.manifestSvc.removeManifestPlane(p);
    //             res && this.manifestSvc.getManifestPlanes(p.parentId);
    //         }
    //     })
}
