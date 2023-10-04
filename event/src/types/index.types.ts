export type ServicePayload = {
  notificationType: string
  projectKey: string
  resource: {
    typeId: string
    id: string
  }
  version: number
  oldVersion: number
  modifiedAt: string
}

export type Message = {
  code: string;
  message: string;
  referencedBy: string;
};

export type ValidatorCreator = (
  path: string[],
  message: Message,
  overrideConfig?: object
) => [string[], [[(o: object) => boolean, string, [object]]]];

export type ValidatorFunction = (o: object) => boolean;

export type Wrapper = (
  validator: ValidatorFunction
) => (value: object) => boolean;
