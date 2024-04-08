export interface StepInfo {
    paletteName: string;
    step: {
        template: any;
        type: string,
        data: {
          name: string,
          prompt: string,
          pythonCode: string,
          loopOver: string
        },
        icon: string
    }
}