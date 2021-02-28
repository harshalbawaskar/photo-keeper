import { Component, OnInit } from '@angular/core';
import { StateDeclaration, StateService, Transition, TransitionService, UIRouterGlobals } from '@uirouter/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'photo-keeper';
  isUsersView: boolean;

  constructor(private stateService: StateService,
    private uiRouterGlobals: UIRouterGlobals,
    private transition: TransitionService) {}

  ngOnInit(): void {
    this.transition.onSuccess(null, (transition: Transition) => {
      this.isUsersView = this.uiRouterGlobals.current.name === 'users';
    })
  }

  onBackClick() {
    const state = this.getPreviousState();
    this.stateService.go(state.name, state.pathParam);
  }

  getPreviousState() {
    switch (this.uiRouterGlobals.current.name) {
      case 'albums':
        return {
          name: 'users',
          pathParam: {
            userId: this.uiRouterGlobals.params.userId
          }
        };
      case 'photos':
      return {
        name: 'albums',
        pathParam: {
          userId: this.uiRouterGlobals.params.userId,
          albumIds: this.uiRouterGlobals.params.albumIds
        }
      };
    }
  }
}
