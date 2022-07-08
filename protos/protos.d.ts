// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as Long from "long";
import {protobuf as $protobuf} from "google-gax";
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace functions. */
        namespace functions {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a CloudFunctionsService */
                class CloudFunctionsService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new CloudFunctionsService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new CloudFunctionsService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CloudFunctionsService;

                    /**
                     * Calls ListFunctions.
                     * @param request ListFunctionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFunctionsResponse
                     */
                    public listFunctions(request: google.cloud.functions.v1.IListFunctionsRequest, callback: google.cloud.functions.v1.CloudFunctionsService.ListFunctionsCallback): void;

                    /**
                     * Calls ListFunctions.
                     * @param request ListFunctionsRequest message or plain object
                     * @returns Promise
                     */
                    public listFunctions(request: google.cloud.functions.v1.IListFunctionsRequest): Promise<google.cloud.functions.v1.ListFunctionsResponse>;

                    /**
                     * Calls GetFunction.
                     * @param request GetFunctionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CloudFunction
                     */
                    public getFunction(request: google.cloud.functions.v1.IGetFunctionRequest, callback: google.cloud.functions.v1.CloudFunctionsService.GetFunctionCallback): void;

                    /**
                     * Calls GetFunction.
                     * @param request GetFunctionRequest message or plain object
                     * @returns Promise
                     */
                    public getFunction(request: google.cloud.functions.v1.IGetFunctionRequest): Promise<google.cloud.functions.v1.CloudFunction>;

                    /**
                     * Calls CreateFunction.
                     * @param request CreateFunctionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createFunction(request: google.cloud.functions.v1.ICreateFunctionRequest, callback: google.cloud.functions.v1.CloudFunctionsService.CreateFunctionCallback): void;

                    /**
                     * Calls CreateFunction.
                     * @param request CreateFunctionRequest message or plain object
                     * @returns Promise
                     */
                    public createFunction(request: google.cloud.functions.v1.ICreateFunctionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateFunction.
                     * @param request UpdateFunctionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateFunction(request: google.cloud.functions.v1.IUpdateFunctionRequest, callback: google.cloud.functions.v1.CloudFunctionsService.UpdateFunctionCallback): void;

                    /**
                     * Calls UpdateFunction.
                     * @param request UpdateFunctionRequest message or plain object
                     * @returns Promise
                     */
                    public updateFunction(request: google.cloud.functions.v1.IUpdateFunctionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteFunction.
                     * @param request DeleteFunctionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteFunction(request: google.cloud.functions.v1.IDeleteFunctionRequest, callback: google.cloud.functions.v1.CloudFunctionsService.DeleteFunctionCallback): void;

                    /**
                     * Calls DeleteFunction.
                     * @param request DeleteFunctionRequest message or plain object
                     * @returns Promise
                     */
                    public deleteFunction(request: google.cloud.functions.v1.IDeleteFunctionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls CallFunction.
                     * @param request CallFunctionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and CallFunctionResponse
                     */
                    public callFunction(request: google.cloud.functions.v1.ICallFunctionRequest, callback: google.cloud.functions.v1.CloudFunctionsService.CallFunctionCallback): void;

                    /**
                     * Calls CallFunction.
                     * @param request CallFunctionRequest message or plain object
                     * @returns Promise
                     */
                    public callFunction(request: google.cloud.functions.v1.ICallFunctionRequest): Promise<google.cloud.functions.v1.CallFunctionResponse>;

                    /**
                     * Calls GenerateUploadUrl.
                     * @param request GenerateUploadUrlRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateUploadUrlResponse
                     */
                    public generateUploadUrl(request: google.cloud.functions.v1.IGenerateUploadUrlRequest, callback: google.cloud.functions.v1.CloudFunctionsService.GenerateUploadUrlCallback): void;

                    /**
                     * Calls GenerateUploadUrl.
                     * @param request GenerateUploadUrlRequest message or plain object
                     * @returns Promise
                     */
                    public generateUploadUrl(request: google.cloud.functions.v1.IGenerateUploadUrlRequest): Promise<google.cloud.functions.v1.GenerateUploadUrlResponse>;

                    /**
                     * Calls GenerateDownloadUrl.
                     * @param request GenerateDownloadUrlRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateDownloadUrlResponse
                     */
                    public generateDownloadUrl(request: google.cloud.functions.v1.IGenerateDownloadUrlRequest, callback: google.cloud.functions.v1.CloudFunctionsService.GenerateDownloadUrlCallback): void;

                    /**
                     * Calls GenerateDownloadUrl.
                     * @param request GenerateDownloadUrlRequest message or plain object
                     * @returns Promise
                     */
                    public generateDownloadUrl(request: google.cloud.functions.v1.IGenerateDownloadUrlRequest): Promise<google.cloud.functions.v1.GenerateDownloadUrlResponse>;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.cloud.functions.v1.CloudFunctionsService.SetIamPolicyCallback): void;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.cloud.functions.v1.CloudFunctionsService.GetIamPolicyCallback): void;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.cloud.functions.v1.CloudFunctionsService.TestIamPermissionsCallback): void;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @returns Promise
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;
                }

                namespace CloudFunctionsService {

                    /**
                     * Callback as used by {@link google.cloud.functions.v1.CloudFunctionsService#listFunctions}.
                     * @param error Error, if any
                     * @param [response] ListFunctionsResponse
                     */
                    type ListFunctionsCallback = (error: (Error|null), response?: google.cloud.functions.v1.ListFunctionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v1.CloudFunctionsService#getFunction}.
                     * @param error Error, if any
                     * @param [response] CloudFunction
                     */
                    type GetFunctionCallback = (error: (Error|null), response?: google.cloud.functions.v1.CloudFunction) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v1.CloudFunctionsService#createFunction}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateFunctionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v1.CloudFunctionsService#updateFunction}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateFunctionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v1.CloudFunctionsService#deleteFunction}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteFunctionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v1.CloudFunctionsService#callFunction}.
                     * @param error Error, if any
                     * @param [response] CallFunctionResponse
                     */
                    type CallFunctionCallback = (error: (Error|null), response?: google.cloud.functions.v1.CallFunctionResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v1.CloudFunctionsService#generateUploadUrl}.
                     * @param error Error, if any
                     * @param [response] GenerateUploadUrlResponse
                     */
                    type GenerateUploadUrlCallback = (error: (Error|null), response?: google.cloud.functions.v1.GenerateUploadUrlResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v1.CloudFunctionsService#generateDownloadUrl}.
                     * @param error Error, if any
                     * @param [response] GenerateDownloadUrlResponse
                     */
                    type GenerateDownloadUrlCallback = (error: (Error|null), response?: google.cloud.functions.v1.GenerateDownloadUrlResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v1.CloudFunctionsService#setIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v1.CloudFunctionsService#getIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v1.CloudFunctionsService#testIamPermissions}.
                     * @param error Error, if any
                     * @param [response] TestIamPermissionsResponse
                     */
                    type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;
                }

                /** Properties of a CloudFunction. */
                interface ICloudFunction {

                    /** CloudFunction name */
                    name?: (string|null);

                    /** CloudFunction description */
                    description?: (string|null);

                    /** CloudFunction sourceArchiveUrl */
                    sourceArchiveUrl?: (string|null);

                    /** CloudFunction sourceRepository */
                    sourceRepository?: (google.cloud.functions.v1.ISourceRepository|null);

                    /** CloudFunction sourceUploadUrl */
                    sourceUploadUrl?: (string|null);

                    /** CloudFunction httpsTrigger */
                    httpsTrigger?: (google.cloud.functions.v1.IHttpsTrigger|null);

                    /** CloudFunction eventTrigger */
                    eventTrigger?: (google.cloud.functions.v1.IEventTrigger|null);

                    /** CloudFunction status */
                    status?: (google.cloud.functions.v1.CloudFunctionStatus|keyof typeof google.cloud.functions.v1.CloudFunctionStatus|null);

                    /** CloudFunction entryPoint */
                    entryPoint?: (string|null);

                    /** CloudFunction runtime */
                    runtime?: (string|null);

                    /** CloudFunction timeout */
                    timeout?: (google.protobuf.IDuration|null);

                    /** CloudFunction availableMemoryMb */
                    availableMemoryMb?: (number|null);

                    /** CloudFunction serviceAccountEmail */
                    serviceAccountEmail?: (string|null);

                    /** CloudFunction updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** CloudFunction versionId */
                    versionId?: (number|Long|string|null);

                    /** CloudFunction labels */
                    labels?: ({ [k: string]: string }|null);

                    /** CloudFunction environmentVariables */
                    environmentVariables?: ({ [k: string]: string }|null);

                    /** CloudFunction buildEnvironmentVariables */
                    buildEnvironmentVariables?: ({ [k: string]: string }|null);

                    /** CloudFunction network */
                    network?: (string|null);

                    /** CloudFunction maxInstances */
                    maxInstances?: (number|null);

                    /** CloudFunction minInstances */
                    minInstances?: (number|null);

                    /** CloudFunction vpcConnector */
                    vpcConnector?: (string|null);

                    /** CloudFunction vpcConnectorEgressSettings */
                    vpcConnectorEgressSettings?: (google.cloud.functions.v1.CloudFunction.VpcConnectorEgressSettings|keyof typeof google.cloud.functions.v1.CloudFunction.VpcConnectorEgressSettings|null);

                    /** CloudFunction ingressSettings */
                    ingressSettings?: (google.cloud.functions.v1.CloudFunction.IngressSettings|keyof typeof google.cloud.functions.v1.CloudFunction.IngressSettings|null);

                    /** CloudFunction kmsKeyName */
                    kmsKeyName?: (string|null);

                    /** CloudFunction buildWorkerPool */
                    buildWorkerPool?: (string|null);

                    /** CloudFunction buildId */
                    buildId?: (string|null);

                    /** CloudFunction buildName */
                    buildName?: (string|null);

                    /** CloudFunction secretEnvironmentVariables */
                    secretEnvironmentVariables?: (google.cloud.functions.v1.ISecretEnvVar[]|null);

                    /** CloudFunction secretVolumes */
                    secretVolumes?: (google.cloud.functions.v1.ISecretVolume[]|null);

                    /** CloudFunction sourceToken */
                    sourceToken?: (string|null);

                    /** CloudFunction dockerRepository */
                    dockerRepository?: (string|null);

                    /** CloudFunction dockerRegistry */
                    dockerRegistry?: (google.cloud.functions.v1.CloudFunction.DockerRegistry|keyof typeof google.cloud.functions.v1.CloudFunction.DockerRegistry|null);
                }

                /** Represents a CloudFunction. */
                class CloudFunction implements ICloudFunction {

                    /**
                     * Constructs a new CloudFunction.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v1.ICloudFunction);

                    /** CloudFunction name. */
                    public name: string;

                    /** CloudFunction description. */
                    public description: string;

                    /** CloudFunction sourceArchiveUrl. */
                    public sourceArchiveUrl?: (string|null);

                    /** CloudFunction sourceRepository. */
                    public sourceRepository?: (google.cloud.functions.v1.ISourceRepository|null);

                    /** CloudFunction sourceUploadUrl. */
                    public sourceUploadUrl?: (string|null);

                    /** CloudFunction httpsTrigger. */
                    public httpsTrigger?: (google.cloud.functions.v1.IHttpsTrigger|null);

                    /** CloudFunction eventTrigger. */
                    public eventTrigger?: (google.cloud.functions.v1.IEventTrigger|null);

                    /** CloudFunction status. */
                    public status: (google.cloud.functions.v1.CloudFunctionStatus|keyof typeof google.cloud.functions.v1.CloudFunctionStatus);

                    /** CloudFunction entryPoint. */
                    public entryPoint: string;

                    /** CloudFunction runtime. */
                    public runtime: string;

                    /** CloudFunction timeout. */
                    public timeout?: (google.protobuf.IDuration|null);

                    /** CloudFunction availableMemoryMb. */
                    public availableMemoryMb: number;

                    /** CloudFunction serviceAccountEmail. */
                    public serviceAccountEmail: string;

                    /** CloudFunction updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** CloudFunction versionId. */
                    public versionId: (number|Long|string);

                    /** CloudFunction labels. */
                    public labels: { [k: string]: string };

                    /** CloudFunction environmentVariables. */
                    public environmentVariables: { [k: string]: string };

                    /** CloudFunction buildEnvironmentVariables. */
                    public buildEnvironmentVariables: { [k: string]: string };

                    /** CloudFunction network. */
                    public network: string;

                    /** CloudFunction maxInstances. */
                    public maxInstances: number;

                    /** CloudFunction minInstances. */
                    public minInstances: number;

                    /** CloudFunction vpcConnector. */
                    public vpcConnector: string;

                    /** CloudFunction vpcConnectorEgressSettings. */
                    public vpcConnectorEgressSettings: (google.cloud.functions.v1.CloudFunction.VpcConnectorEgressSettings|keyof typeof google.cloud.functions.v1.CloudFunction.VpcConnectorEgressSettings);

                    /** CloudFunction ingressSettings. */
                    public ingressSettings: (google.cloud.functions.v1.CloudFunction.IngressSettings|keyof typeof google.cloud.functions.v1.CloudFunction.IngressSettings);

                    /** CloudFunction kmsKeyName. */
                    public kmsKeyName: string;

                    /** CloudFunction buildWorkerPool. */
                    public buildWorkerPool: string;

                    /** CloudFunction buildId. */
                    public buildId: string;

                    /** CloudFunction buildName. */
                    public buildName: string;

                    /** CloudFunction secretEnvironmentVariables. */
                    public secretEnvironmentVariables: google.cloud.functions.v1.ISecretEnvVar[];

                    /** CloudFunction secretVolumes. */
                    public secretVolumes: google.cloud.functions.v1.ISecretVolume[];

                    /** CloudFunction sourceToken. */
                    public sourceToken: string;

                    /** CloudFunction dockerRepository. */
                    public dockerRepository: string;

                    /** CloudFunction dockerRegistry. */
                    public dockerRegistry: (google.cloud.functions.v1.CloudFunction.DockerRegistry|keyof typeof google.cloud.functions.v1.CloudFunction.DockerRegistry);

                    /** CloudFunction sourceCode. */
                    public sourceCode?: ("sourceArchiveUrl"|"sourceRepository"|"sourceUploadUrl");

                    /** CloudFunction trigger. */
                    public trigger?: ("httpsTrigger"|"eventTrigger");

                    /**
                     * Creates a new CloudFunction instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CloudFunction instance
                     */
                    public static create(properties?: google.cloud.functions.v1.ICloudFunction): google.cloud.functions.v1.CloudFunction;

                    /**
                     * Encodes the specified CloudFunction message. Does not implicitly {@link google.cloud.functions.v1.CloudFunction.verify|verify} messages.
                     * @param message CloudFunction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v1.ICloudFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CloudFunction message, length delimited. Does not implicitly {@link google.cloud.functions.v1.CloudFunction.verify|verify} messages.
                     * @param message CloudFunction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v1.ICloudFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CloudFunction message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CloudFunction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.CloudFunction;

                    /**
                     * Decodes a CloudFunction message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CloudFunction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.CloudFunction;

                    /**
                     * Verifies a CloudFunction message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CloudFunction message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CloudFunction
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.CloudFunction;

                    /**
                     * Creates a plain object from a CloudFunction message. Also converts values to other types if specified.
                     * @param message CloudFunction
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v1.CloudFunction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CloudFunction to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace CloudFunction {

                    /** VpcConnectorEgressSettings enum. */
                    enum VpcConnectorEgressSettings {
                        VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED = 0,
                        PRIVATE_RANGES_ONLY = 1,
                        ALL_TRAFFIC = 2
                    }

                    /** IngressSettings enum. */
                    enum IngressSettings {
                        INGRESS_SETTINGS_UNSPECIFIED = 0,
                        ALLOW_ALL = 1,
                        ALLOW_INTERNAL_ONLY = 2,
                        ALLOW_INTERNAL_AND_GCLB = 3
                    }

                    /** DockerRegistry enum. */
                    enum DockerRegistry {
                        DOCKER_REGISTRY_UNSPECIFIED = 0,
                        CONTAINER_REGISTRY = 1,
                        ARTIFACT_REGISTRY = 2
                    }
                }

                /** Properties of a SourceRepository. */
                interface ISourceRepository {

                    /** SourceRepository url */
                    url?: (string|null);

                    /** SourceRepository deployedUrl */
                    deployedUrl?: (string|null);
                }

                /** Represents a SourceRepository. */
                class SourceRepository implements ISourceRepository {

                    /**
                     * Constructs a new SourceRepository.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v1.ISourceRepository);

                    /** SourceRepository url. */
                    public url: string;

                    /** SourceRepository deployedUrl. */
                    public deployedUrl: string;

                    /**
                     * Creates a new SourceRepository instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SourceRepository instance
                     */
                    public static create(properties?: google.cloud.functions.v1.ISourceRepository): google.cloud.functions.v1.SourceRepository;

                    /**
                     * Encodes the specified SourceRepository message. Does not implicitly {@link google.cloud.functions.v1.SourceRepository.verify|verify} messages.
                     * @param message SourceRepository message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v1.ISourceRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SourceRepository message, length delimited. Does not implicitly {@link google.cloud.functions.v1.SourceRepository.verify|verify} messages.
                     * @param message SourceRepository message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v1.ISourceRepository, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SourceRepository message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SourceRepository
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.SourceRepository;

                    /**
                     * Decodes a SourceRepository message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SourceRepository
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.SourceRepository;

                    /**
                     * Verifies a SourceRepository message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SourceRepository message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SourceRepository
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.SourceRepository;

                    /**
                     * Creates a plain object from a SourceRepository message. Also converts values to other types if specified.
                     * @param message SourceRepository
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v1.SourceRepository, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SourceRepository to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a HttpsTrigger. */
                interface IHttpsTrigger {

                    /** HttpsTrigger url */
                    url?: (string|null);

                    /** HttpsTrigger securityLevel */
                    securityLevel?: (google.cloud.functions.v1.HttpsTrigger.SecurityLevel|keyof typeof google.cloud.functions.v1.HttpsTrigger.SecurityLevel|null);
                }

                /** Represents a HttpsTrigger. */
                class HttpsTrigger implements IHttpsTrigger {

                    /**
                     * Constructs a new HttpsTrigger.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v1.IHttpsTrigger);

                    /** HttpsTrigger url. */
                    public url: string;

                    /** HttpsTrigger securityLevel. */
                    public securityLevel: (google.cloud.functions.v1.HttpsTrigger.SecurityLevel|keyof typeof google.cloud.functions.v1.HttpsTrigger.SecurityLevel);

                    /**
                     * Creates a new HttpsTrigger instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HttpsTrigger instance
                     */
                    public static create(properties?: google.cloud.functions.v1.IHttpsTrigger): google.cloud.functions.v1.HttpsTrigger;

                    /**
                     * Encodes the specified HttpsTrigger message. Does not implicitly {@link google.cloud.functions.v1.HttpsTrigger.verify|verify} messages.
                     * @param message HttpsTrigger message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v1.IHttpsTrigger, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HttpsTrigger message, length delimited. Does not implicitly {@link google.cloud.functions.v1.HttpsTrigger.verify|verify} messages.
                     * @param message HttpsTrigger message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v1.IHttpsTrigger, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HttpsTrigger message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HttpsTrigger
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.HttpsTrigger;

                    /**
                     * Decodes a HttpsTrigger message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HttpsTrigger
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.HttpsTrigger;

                    /**
                     * Verifies a HttpsTrigger message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a HttpsTrigger message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns HttpsTrigger
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.HttpsTrigger;

                    /**
                     * Creates a plain object from a HttpsTrigger message. Also converts values to other types if specified.
                     * @param message HttpsTrigger
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v1.HttpsTrigger, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HttpsTrigger to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace HttpsTrigger {

                    /** SecurityLevel enum. */
                    enum SecurityLevel {
                        SECURITY_LEVEL_UNSPECIFIED = 0,
                        SECURE_ALWAYS = 1,
                        SECURE_OPTIONAL = 2
                    }
                }

                /** Properties of an EventTrigger. */
                interface IEventTrigger {

                    /** EventTrigger eventType */
                    eventType?: (string|null);

                    /** EventTrigger resource */
                    resource?: (string|null);

                    /** EventTrigger service */
                    service?: (string|null);

                    /** EventTrigger failurePolicy */
                    failurePolicy?: (google.cloud.functions.v1.IFailurePolicy|null);
                }

                /** Represents an EventTrigger. */
                class EventTrigger implements IEventTrigger {

                    /**
                     * Constructs a new EventTrigger.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v1.IEventTrigger);

                    /** EventTrigger eventType. */
                    public eventType: string;

                    /** EventTrigger resource. */
                    public resource: string;

                    /** EventTrigger service. */
                    public service: string;

                    /** EventTrigger failurePolicy. */
                    public failurePolicy?: (google.cloud.functions.v1.IFailurePolicy|null);

                    /**
                     * Creates a new EventTrigger instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EventTrigger instance
                     */
                    public static create(properties?: google.cloud.functions.v1.IEventTrigger): google.cloud.functions.v1.EventTrigger;

                    /**
                     * Encodes the specified EventTrigger message. Does not implicitly {@link google.cloud.functions.v1.EventTrigger.verify|verify} messages.
                     * @param message EventTrigger message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v1.IEventTrigger, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EventTrigger message, length delimited. Does not implicitly {@link google.cloud.functions.v1.EventTrigger.verify|verify} messages.
                     * @param message EventTrigger message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v1.IEventTrigger, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EventTrigger message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EventTrigger
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.EventTrigger;

                    /**
                     * Decodes an EventTrigger message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EventTrigger
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.EventTrigger;

                    /**
                     * Verifies an EventTrigger message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EventTrigger message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EventTrigger
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.EventTrigger;

                    /**
                     * Creates a plain object from an EventTrigger message. Also converts values to other types if specified.
                     * @param message EventTrigger
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v1.EventTrigger, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EventTrigger to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FailurePolicy. */
                interface IFailurePolicy {

                    /** FailurePolicy retry */
                    retry?: (google.cloud.functions.v1.FailurePolicy.IRetry|null);
                }

                /** Represents a FailurePolicy. */
                class FailurePolicy implements IFailurePolicy {

                    /**
                     * Constructs a new FailurePolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v1.IFailurePolicy);

                    /** FailurePolicy retry. */
                    public retry?: (google.cloud.functions.v1.FailurePolicy.IRetry|null);

                    /** FailurePolicy action. */
                    public action?: "retry";

                    /**
                     * Creates a new FailurePolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FailurePolicy instance
                     */
                    public static create(properties?: google.cloud.functions.v1.IFailurePolicy): google.cloud.functions.v1.FailurePolicy;

                    /**
                     * Encodes the specified FailurePolicy message. Does not implicitly {@link google.cloud.functions.v1.FailurePolicy.verify|verify} messages.
                     * @param message FailurePolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v1.IFailurePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FailurePolicy message, length delimited. Does not implicitly {@link google.cloud.functions.v1.FailurePolicy.verify|verify} messages.
                     * @param message FailurePolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v1.IFailurePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FailurePolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FailurePolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.FailurePolicy;

                    /**
                     * Decodes a FailurePolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FailurePolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.FailurePolicy;

                    /**
                     * Verifies a FailurePolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FailurePolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FailurePolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.FailurePolicy;

                    /**
                     * Creates a plain object from a FailurePolicy message. Also converts values to other types if specified.
                     * @param message FailurePolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v1.FailurePolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FailurePolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace FailurePolicy {

                    /** Properties of a Retry. */
                    interface IRetry {
                    }

                    /** Represents a Retry. */
                    class Retry implements IRetry {

                        /**
                         * Constructs a new Retry.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.functions.v1.FailurePolicy.IRetry);

                        /**
                         * Creates a new Retry instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Retry instance
                         */
                        public static create(properties?: google.cloud.functions.v1.FailurePolicy.IRetry): google.cloud.functions.v1.FailurePolicy.Retry;

                        /**
                         * Encodes the specified Retry message. Does not implicitly {@link google.cloud.functions.v1.FailurePolicy.Retry.verify|verify} messages.
                         * @param message Retry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.functions.v1.FailurePolicy.IRetry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Retry message, length delimited. Does not implicitly {@link google.cloud.functions.v1.FailurePolicy.Retry.verify|verify} messages.
                         * @param message Retry message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.functions.v1.FailurePolicy.IRetry, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Retry message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Retry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.FailurePolicy.Retry;

                        /**
                         * Decodes a Retry message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Retry
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.FailurePolicy.Retry;

                        /**
                         * Verifies a Retry message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Retry message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Retry
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.FailurePolicy.Retry;

                        /**
                         * Creates a plain object from a Retry message. Also converts values to other types if specified.
                         * @param message Retry
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.functions.v1.FailurePolicy.Retry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Retry to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** CloudFunctionStatus enum. */
                enum CloudFunctionStatus {
                    CLOUD_FUNCTION_STATUS_UNSPECIFIED = 0,
                    ACTIVE = 1,
                    OFFLINE = 2,
                    DEPLOY_IN_PROGRESS = 3,
                    DELETE_IN_PROGRESS = 4,
                    UNKNOWN = 5
                }

                /** Properties of a SecretEnvVar. */
                interface ISecretEnvVar {

                    /** SecretEnvVar key */
                    key?: (string|null);

                    /** SecretEnvVar projectId */
                    projectId?: (string|null);

                    /** SecretEnvVar secret */
                    secret?: (string|null);

                    /** SecretEnvVar version */
                    version?: (string|null);
                }

                /** Represents a SecretEnvVar. */
                class SecretEnvVar implements ISecretEnvVar {

                    /**
                     * Constructs a new SecretEnvVar.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v1.ISecretEnvVar);

                    /** SecretEnvVar key. */
                    public key: string;

                    /** SecretEnvVar projectId. */
                    public projectId: string;

                    /** SecretEnvVar secret. */
                    public secret: string;

                    /** SecretEnvVar version. */
                    public version: string;

                    /**
                     * Creates a new SecretEnvVar instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SecretEnvVar instance
                     */
                    public static create(properties?: google.cloud.functions.v1.ISecretEnvVar): google.cloud.functions.v1.SecretEnvVar;

                    /**
                     * Encodes the specified SecretEnvVar message. Does not implicitly {@link google.cloud.functions.v1.SecretEnvVar.verify|verify} messages.
                     * @param message SecretEnvVar message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v1.ISecretEnvVar, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SecretEnvVar message, length delimited. Does not implicitly {@link google.cloud.functions.v1.SecretEnvVar.verify|verify} messages.
                     * @param message SecretEnvVar message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v1.ISecretEnvVar, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SecretEnvVar message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SecretEnvVar
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.SecretEnvVar;

                    /**
                     * Decodes a SecretEnvVar message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SecretEnvVar
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.SecretEnvVar;

                    /**
                     * Verifies a SecretEnvVar message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SecretEnvVar message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SecretEnvVar
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.SecretEnvVar;

                    /**
                     * Creates a plain object from a SecretEnvVar message. Also converts values to other types if specified.
                     * @param message SecretEnvVar
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v1.SecretEnvVar, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SecretEnvVar to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SecretVolume. */
                interface ISecretVolume {

                    /** SecretVolume mountPath */
                    mountPath?: (string|null);

                    /** SecretVolume projectId */
                    projectId?: (string|null);

                    /** SecretVolume secret */
                    secret?: (string|null);

                    /** SecretVolume versions */
                    versions?: (google.cloud.functions.v1.SecretVolume.ISecretVersion[]|null);
                }

                /** Represents a SecretVolume. */
                class SecretVolume implements ISecretVolume {

                    /**
                     * Constructs a new SecretVolume.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v1.ISecretVolume);

                    /** SecretVolume mountPath. */
                    public mountPath: string;

                    /** SecretVolume projectId. */
                    public projectId: string;

                    /** SecretVolume secret. */
                    public secret: string;

                    /** SecretVolume versions. */
                    public versions: google.cloud.functions.v1.SecretVolume.ISecretVersion[];

                    /**
                     * Creates a new SecretVolume instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SecretVolume instance
                     */
                    public static create(properties?: google.cloud.functions.v1.ISecretVolume): google.cloud.functions.v1.SecretVolume;

                    /**
                     * Encodes the specified SecretVolume message. Does not implicitly {@link google.cloud.functions.v1.SecretVolume.verify|verify} messages.
                     * @param message SecretVolume message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v1.ISecretVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SecretVolume message, length delimited. Does not implicitly {@link google.cloud.functions.v1.SecretVolume.verify|verify} messages.
                     * @param message SecretVolume message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v1.ISecretVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SecretVolume message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SecretVolume
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.SecretVolume;

                    /**
                     * Decodes a SecretVolume message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SecretVolume
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.SecretVolume;

                    /**
                     * Verifies a SecretVolume message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SecretVolume message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SecretVolume
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.SecretVolume;

                    /**
                     * Creates a plain object from a SecretVolume message. Also converts values to other types if specified.
                     * @param message SecretVolume
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v1.SecretVolume, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SecretVolume to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SecretVolume {

                    /** Properties of a SecretVersion. */
                    interface ISecretVersion {

                        /** SecretVersion version */
                        version?: (string|null);

                        /** SecretVersion path */
                        path?: (string|null);
                    }

                    /** Represents a SecretVersion. */
                    class SecretVersion implements ISecretVersion {

                        /**
                         * Constructs a new SecretVersion.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.functions.v1.SecretVolume.ISecretVersion);

                        /** SecretVersion version. */
                        public version: string;

                        /** SecretVersion path. */
                        public path: string;

                        /**
                         * Creates a new SecretVersion instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SecretVersion instance
                         */
                        public static create(properties?: google.cloud.functions.v1.SecretVolume.ISecretVersion): google.cloud.functions.v1.SecretVolume.SecretVersion;

                        /**
                         * Encodes the specified SecretVersion message. Does not implicitly {@link google.cloud.functions.v1.SecretVolume.SecretVersion.verify|verify} messages.
                         * @param message SecretVersion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.functions.v1.SecretVolume.ISecretVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SecretVersion message, length delimited. Does not implicitly {@link google.cloud.functions.v1.SecretVolume.SecretVersion.verify|verify} messages.
                         * @param message SecretVersion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.functions.v1.SecretVolume.ISecretVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SecretVersion message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SecretVersion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.SecretVolume.SecretVersion;

                        /**
                         * Decodes a SecretVersion message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SecretVersion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.SecretVolume.SecretVersion;

                        /**
                         * Verifies a SecretVersion message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SecretVersion message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SecretVersion
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.SecretVolume.SecretVersion;

                        /**
                         * Creates a plain object from a SecretVersion message. Also converts values to other types if specified.
                         * @param message SecretVersion
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.functions.v1.SecretVolume.SecretVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SecretVersion to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a CreateFunctionRequest. */
                interface ICreateFunctionRequest {

                    /** CreateFunctionRequest location */
                    location?: (string|null);

                    /** CreateFunctionRequest function */
                    "function"?: (google.cloud.functions.v1.ICloudFunction|null);
                }

                /** Represents a CreateFunctionRequest. */
                class CreateFunctionRequest implements ICreateFunctionRequest {

                    /**
                     * Constructs a new CreateFunctionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v1.ICreateFunctionRequest);

                    /** CreateFunctionRequest location. */
                    public location: string;

                    /** CreateFunctionRequest function. */
                    public function?: (google.cloud.functions.v1.ICloudFunction|null);

                    /**
                     * Creates a new CreateFunctionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateFunctionRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v1.ICreateFunctionRequest): google.cloud.functions.v1.CreateFunctionRequest;

                    /**
                     * Encodes the specified CreateFunctionRequest message. Does not implicitly {@link google.cloud.functions.v1.CreateFunctionRequest.verify|verify} messages.
                     * @param message CreateFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v1.ICreateFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateFunctionRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v1.CreateFunctionRequest.verify|verify} messages.
                     * @param message CreateFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v1.ICreateFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateFunctionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.CreateFunctionRequest;

                    /**
                     * Decodes a CreateFunctionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.CreateFunctionRequest;

                    /**
                     * Verifies a CreateFunctionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateFunctionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateFunctionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.CreateFunctionRequest;

                    /**
                     * Creates a plain object from a CreateFunctionRequest message. Also converts values to other types if specified.
                     * @param message CreateFunctionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v1.CreateFunctionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateFunctionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateFunctionRequest. */
                interface IUpdateFunctionRequest {

                    /** UpdateFunctionRequest function */
                    "function"?: (google.cloud.functions.v1.ICloudFunction|null);

                    /** UpdateFunctionRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateFunctionRequest. */
                class UpdateFunctionRequest implements IUpdateFunctionRequest {

                    /**
                     * Constructs a new UpdateFunctionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v1.IUpdateFunctionRequest);

                    /** UpdateFunctionRequest function. */
                    public function?: (google.cloud.functions.v1.ICloudFunction|null);

                    /** UpdateFunctionRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateFunctionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateFunctionRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v1.IUpdateFunctionRequest): google.cloud.functions.v1.UpdateFunctionRequest;

                    /**
                     * Encodes the specified UpdateFunctionRequest message. Does not implicitly {@link google.cloud.functions.v1.UpdateFunctionRequest.verify|verify} messages.
                     * @param message UpdateFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v1.IUpdateFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateFunctionRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v1.UpdateFunctionRequest.verify|verify} messages.
                     * @param message UpdateFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v1.IUpdateFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateFunctionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.UpdateFunctionRequest;

                    /**
                     * Decodes an UpdateFunctionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.UpdateFunctionRequest;

                    /**
                     * Verifies an UpdateFunctionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateFunctionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateFunctionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.UpdateFunctionRequest;

                    /**
                     * Creates a plain object from an UpdateFunctionRequest message. Also converts values to other types if specified.
                     * @param message UpdateFunctionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v1.UpdateFunctionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateFunctionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetFunctionRequest. */
                interface IGetFunctionRequest {

                    /** GetFunctionRequest name */
                    name?: (string|null);
                }

                /** Represents a GetFunctionRequest. */
                class GetFunctionRequest implements IGetFunctionRequest {

                    /**
                     * Constructs a new GetFunctionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v1.IGetFunctionRequest);

                    /** GetFunctionRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetFunctionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetFunctionRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v1.IGetFunctionRequest): google.cloud.functions.v1.GetFunctionRequest;

                    /**
                     * Encodes the specified GetFunctionRequest message. Does not implicitly {@link google.cloud.functions.v1.GetFunctionRequest.verify|verify} messages.
                     * @param message GetFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v1.IGetFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetFunctionRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v1.GetFunctionRequest.verify|verify} messages.
                     * @param message GetFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v1.IGetFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetFunctionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.GetFunctionRequest;

                    /**
                     * Decodes a GetFunctionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.GetFunctionRequest;

                    /**
                     * Verifies a GetFunctionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetFunctionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetFunctionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.GetFunctionRequest;

                    /**
                     * Creates a plain object from a GetFunctionRequest message. Also converts values to other types if specified.
                     * @param message GetFunctionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v1.GetFunctionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetFunctionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFunctionsRequest. */
                interface IListFunctionsRequest {

                    /** ListFunctionsRequest parent */
                    parent?: (string|null);

                    /** ListFunctionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListFunctionsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListFunctionsRequest. */
                class ListFunctionsRequest implements IListFunctionsRequest {

                    /**
                     * Constructs a new ListFunctionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v1.IListFunctionsRequest);

                    /** ListFunctionsRequest parent. */
                    public parent: string;

                    /** ListFunctionsRequest pageSize. */
                    public pageSize: number;

                    /** ListFunctionsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListFunctionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFunctionsRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v1.IListFunctionsRequest): google.cloud.functions.v1.ListFunctionsRequest;

                    /**
                     * Encodes the specified ListFunctionsRequest message. Does not implicitly {@link google.cloud.functions.v1.ListFunctionsRequest.verify|verify} messages.
                     * @param message ListFunctionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v1.IListFunctionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFunctionsRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v1.ListFunctionsRequest.verify|verify} messages.
                     * @param message ListFunctionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v1.IListFunctionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFunctionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFunctionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.ListFunctionsRequest;

                    /**
                     * Decodes a ListFunctionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFunctionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.ListFunctionsRequest;

                    /**
                     * Verifies a ListFunctionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFunctionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFunctionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.ListFunctionsRequest;

                    /**
                     * Creates a plain object from a ListFunctionsRequest message. Also converts values to other types if specified.
                     * @param message ListFunctionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v1.ListFunctionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFunctionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFunctionsResponse. */
                interface IListFunctionsResponse {

                    /** ListFunctionsResponse functions */
                    functions?: (google.cloud.functions.v1.ICloudFunction[]|null);

                    /** ListFunctionsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListFunctionsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListFunctionsResponse. */
                class ListFunctionsResponse implements IListFunctionsResponse {

                    /**
                     * Constructs a new ListFunctionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v1.IListFunctionsResponse);

                    /** ListFunctionsResponse functions. */
                    public functions: google.cloud.functions.v1.ICloudFunction[];

                    /** ListFunctionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListFunctionsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListFunctionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFunctionsResponse instance
                     */
                    public static create(properties?: google.cloud.functions.v1.IListFunctionsResponse): google.cloud.functions.v1.ListFunctionsResponse;

                    /**
                     * Encodes the specified ListFunctionsResponse message. Does not implicitly {@link google.cloud.functions.v1.ListFunctionsResponse.verify|verify} messages.
                     * @param message ListFunctionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v1.IListFunctionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFunctionsResponse message, length delimited. Does not implicitly {@link google.cloud.functions.v1.ListFunctionsResponse.verify|verify} messages.
                     * @param message ListFunctionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v1.IListFunctionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFunctionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFunctionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.ListFunctionsResponse;

                    /**
                     * Decodes a ListFunctionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFunctionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.ListFunctionsResponse;

                    /**
                     * Verifies a ListFunctionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFunctionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFunctionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.ListFunctionsResponse;

                    /**
                     * Creates a plain object from a ListFunctionsResponse message. Also converts values to other types if specified.
                     * @param message ListFunctionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v1.ListFunctionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFunctionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteFunctionRequest. */
                interface IDeleteFunctionRequest {

                    /** DeleteFunctionRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteFunctionRequest. */
                class DeleteFunctionRequest implements IDeleteFunctionRequest {

                    /**
                     * Constructs a new DeleteFunctionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v1.IDeleteFunctionRequest);

                    /** DeleteFunctionRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteFunctionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteFunctionRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v1.IDeleteFunctionRequest): google.cloud.functions.v1.DeleteFunctionRequest;

                    /**
                     * Encodes the specified DeleteFunctionRequest message. Does not implicitly {@link google.cloud.functions.v1.DeleteFunctionRequest.verify|verify} messages.
                     * @param message DeleteFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v1.IDeleteFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteFunctionRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v1.DeleteFunctionRequest.verify|verify} messages.
                     * @param message DeleteFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v1.IDeleteFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteFunctionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.DeleteFunctionRequest;

                    /**
                     * Decodes a DeleteFunctionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.DeleteFunctionRequest;

                    /**
                     * Verifies a DeleteFunctionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteFunctionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteFunctionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.DeleteFunctionRequest;

                    /**
                     * Creates a plain object from a DeleteFunctionRequest message. Also converts values to other types if specified.
                     * @param message DeleteFunctionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v1.DeleteFunctionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteFunctionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CallFunctionRequest. */
                interface ICallFunctionRequest {

                    /** CallFunctionRequest name */
                    name?: (string|null);

                    /** CallFunctionRequest data */
                    data?: (string|null);
                }

                /** Represents a CallFunctionRequest. */
                class CallFunctionRequest implements ICallFunctionRequest {

                    /**
                     * Constructs a new CallFunctionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v1.ICallFunctionRequest);

                    /** CallFunctionRequest name. */
                    public name: string;

                    /** CallFunctionRequest data. */
                    public data: string;

                    /**
                     * Creates a new CallFunctionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CallFunctionRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v1.ICallFunctionRequest): google.cloud.functions.v1.CallFunctionRequest;

                    /**
                     * Encodes the specified CallFunctionRequest message. Does not implicitly {@link google.cloud.functions.v1.CallFunctionRequest.verify|verify} messages.
                     * @param message CallFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v1.ICallFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CallFunctionRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v1.CallFunctionRequest.verify|verify} messages.
                     * @param message CallFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v1.ICallFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CallFunctionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CallFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.CallFunctionRequest;

                    /**
                     * Decodes a CallFunctionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CallFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.CallFunctionRequest;

                    /**
                     * Verifies a CallFunctionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CallFunctionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CallFunctionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.CallFunctionRequest;

                    /**
                     * Creates a plain object from a CallFunctionRequest message. Also converts values to other types if specified.
                     * @param message CallFunctionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v1.CallFunctionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CallFunctionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CallFunctionResponse. */
                interface ICallFunctionResponse {

                    /** CallFunctionResponse executionId */
                    executionId?: (string|null);

                    /** CallFunctionResponse result */
                    result?: (string|null);

                    /** CallFunctionResponse error */
                    error?: (string|null);
                }

                /** Represents a CallFunctionResponse. */
                class CallFunctionResponse implements ICallFunctionResponse {

                    /**
                     * Constructs a new CallFunctionResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v1.ICallFunctionResponse);

                    /** CallFunctionResponse executionId. */
                    public executionId: string;

                    /** CallFunctionResponse result. */
                    public result: string;

                    /** CallFunctionResponse error. */
                    public error: string;

                    /**
                     * Creates a new CallFunctionResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CallFunctionResponse instance
                     */
                    public static create(properties?: google.cloud.functions.v1.ICallFunctionResponse): google.cloud.functions.v1.CallFunctionResponse;

                    /**
                     * Encodes the specified CallFunctionResponse message. Does not implicitly {@link google.cloud.functions.v1.CallFunctionResponse.verify|verify} messages.
                     * @param message CallFunctionResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v1.ICallFunctionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CallFunctionResponse message, length delimited. Does not implicitly {@link google.cloud.functions.v1.CallFunctionResponse.verify|verify} messages.
                     * @param message CallFunctionResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v1.ICallFunctionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CallFunctionResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CallFunctionResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.CallFunctionResponse;

                    /**
                     * Decodes a CallFunctionResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CallFunctionResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.CallFunctionResponse;

                    /**
                     * Verifies a CallFunctionResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CallFunctionResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CallFunctionResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.CallFunctionResponse;

                    /**
                     * Creates a plain object from a CallFunctionResponse message. Also converts values to other types if specified.
                     * @param message CallFunctionResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v1.CallFunctionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CallFunctionResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GenerateUploadUrlRequest. */
                interface IGenerateUploadUrlRequest {

                    /** GenerateUploadUrlRequest parent */
                    parent?: (string|null);

                    /** GenerateUploadUrlRequest kmsKeyName */
                    kmsKeyName?: (string|null);
                }

                /** Represents a GenerateUploadUrlRequest. */
                class GenerateUploadUrlRequest implements IGenerateUploadUrlRequest {

                    /**
                     * Constructs a new GenerateUploadUrlRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v1.IGenerateUploadUrlRequest);

                    /** GenerateUploadUrlRequest parent. */
                    public parent: string;

                    /** GenerateUploadUrlRequest kmsKeyName. */
                    public kmsKeyName: string;

                    /**
                     * Creates a new GenerateUploadUrlRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateUploadUrlRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v1.IGenerateUploadUrlRequest): google.cloud.functions.v1.GenerateUploadUrlRequest;

                    /**
                     * Encodes the specified GenerateUploadUrlRequest message. Does not implicitly {@link google.cloud.functions.v1.GenerateUploadUrlRequest.verify|verify} messages.
                     * @param message GenerateUploadUrlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v1.IGenerateUploadUrlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateUploadUrlRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v1.GenerateUploadUrlRequest.verify|verify} messages.
                     * @param message GenerateUploadUrlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v1.IGenerateUploadUrlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateUploadUrlRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateUploadUrlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.GenerateUploadUrlRequest;

                    /**
                     * Decodes a GenerateUploadUrlRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateUploadUrlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.GenerateUploadUrlRequest;

                    /**
                     * Verifies a GenerateUploadUrlRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateUploadUrlRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateUploadUrlRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.GenerateUploadUrlRequest;

                    /**
                     * Creates a plain object from a GenerateUploadUrlRequest message. Also converts values to other types if specified.
                     * @param message GenerateUploadUrlRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v1.GenerateUploadUrlRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateUploadUrlRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GenerateUploadUrlResponse. */
                interface IGenerateUploadUrlResponse {

                    /** GenerateUploadUrlResponse uploadUrl */
                    uploadUrl?: (string|null);
                }

                /** Represents a GenerateUploadUrlResponse. */
                class GenerateUploadUrlResponse implements IGenerateUploadUrlResponse {

                    /**
                     * Constructs a new GenerateUploadUrlResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v1.IGenerateUploadUrlResponse);

                    /** GenerateUploadUrlResponse uploadUrl. */
                    public uploadUrl: string;

                    /**
                     * Creates a new GenerateUploadUrlResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateUploadUrlResponse instance
                     */
                    public static create(properties?: google.cloud.functions.v1.IGenerateUploadUrlResponse): google.cloud.functions.v1.GenerateUploadUrlResponse;

                    /**
                     * Encodes the specified GenerateUploadUrlResponse message. Does not implicitly {@link google.cloud.functions.v1.GenerateUploadUrlResponse.verify|verify} messages.
                     * @param message GenerateUploadUrlResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v1.IGenerateUploadUrlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateUploadUrlResponse message, length delimited. Does not implicitly {@link google.cloud.functions.v1.GenerateUploadUrlResponse.verify|verify} messages.
                     * @param message GenerateUploadUrlResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v1.IGenerateUploadUrlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateUploadUrlResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateUploadUrlResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.GenerateUploadUrlResponse;

                    /**
                     * Decodes a GenerateUploadUrlResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateUploadUrlResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.GenerateUploadUrlResponse;

                    /**
                     * Verifies a GenerateUploadUrlResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateUploadUrlResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateUploadUrlResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.GenerateUploadUrlResponse;

                    /**
                     * Creates a plain object from a GenerateUploadUrlResponse message. Also converts values to other types if specified.
                     * @param message GenerateUploadUrlResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v1.GenerateUploadUrlResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateUploadUrlResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GenerateDownloadUrlRequest. */
                interface IGenerateDownloadUrlRequest {

                    /** GenerateDownloadUrlRequest name */
                    name?: (string|null);

                    /** GenerateDownloadUrlRequest versionId */
                    versionId?: (number|Long|string|null);
                }

                /** Represents a GenerateDownloadUrlRequest. */
                class GenerateDownloadUrlRequest implements IGenerateDownloadUrlRequest {

                    /**
                     * Constructs a new GenerateDownloadUrlRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v1.IGenerateDownloadUrlRequest);

                    /** GenerateDownloadUrlRequest name. */
                    public name: string;

                    /** GenerateDownloadUrlRequest versionId. */
                    public versionId: (number|Long|string);

                    /**
                     * Creates a new GenerateDownloadUrlRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateDownloadUrlRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v1.IGenerateDownloadUrlRequest): google.cloud.functions.v1.GenerateDownloadUrlRequest;

                    /**
                     * Encodes the specified GenerateDownloadUrlRequest message. Does not implicitly {@link google.cloud.functions.v1.GenerateDownloadUrlRequest.verify|verify} messages.
                     * @param message GenerateDownloadUrlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v1.IGenerateDownloadUrlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateDownloadUrlRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v1.GenerateDownloadUrlRequest.verify|verify} messages.
                     * @param message GenerateDownloadUrlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v1.IGenerateDownloadUrlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateDownloadUrlRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateDownloadUrlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.GenerateDownloadUrlRequest;

                    /**
                     * Decodes a GenerateDownloadUrlRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateDownloadUrlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.GenerateDownloadUrlRequest;

                    /**
                     * Verifies a GenerateDownloadUrlRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateDownloadUrlRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateDownloadUrlRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.GenerateDownloadUrlRequest;

                    /**
                     * Creates a plain object from a GenerateDownloadUrlRequest message. Also converts values to other types if specified.
                     * @param message GenerateDownloadUrlRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v1.GenerateDownloadUrlRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateDownloadUrlRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GenerateDownloadUrlResponse. */
                interface IGenerateDownloadUrlResponse {

                    /** GenerateDownloadUrlResponse downloadUrl */
                    downloadUrl?: (string|null);
                }

                /** Represents a GenerateDownloadUrlResponse. */
                class GenerateDownloadUrlResponse implements IGenerateDownloadUrlResponse {

                    /**
                     * Constructs a new GenerateDownloadUrlResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v1.IGenerateDownloadUrlResponse);

                    /** GenerateDownloadUrlResponse downloadUrl. */
                    public downloadUrl: string;

                    /**
                     * Creates a new GenerateDownloadUrlResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateDownloadUrlResponse instance
                     */
                    public static create(properties?: google.cloud.functions.v1.IGenerateDownloadUrlResponse): google.cloud.functions.v1.GenerateDownloadUrlResponse;

                    /**
                     * Encodes the specified GenerateDownloadUrlResponse message. Does not implicitly {@link google.cloud.functions.v1.GenerateDownloadUrlResponse.verify|verify} messages.
                     * @param message GenerateDownloadUrlResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v1.IGenerateDownloadUrlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateDownloadUrlResponse message, length delimited. Does not implicitly {@link google.cloud.functions.v1.GenerateDownloadUrlResponse.verify|verify} messages.
                     * @param message GenerateDownloadUrlResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v1.IGenerateDownloadUrlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateDownloadUrlResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateDownloadUrlResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.GenerateDownloadUrlResponse;

                    /**
                     * Decodes a GenerateDownloadUrlResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateDownloadUrlResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.GenerateDownloadUrlResponse;

                    /**
                     * Verifies a GenerateDownloadUrlResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateDownloadUrlResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateDownloadUrlResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.GenerateDownloadUrlResponse;

                    /**
                     * Creates a plain object from a GenerateDownloadUrlResponse message. Also converts values to other types if specified.
                     * @param message GenerateDownloadUrlResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v1.GenerateDownloadUrlResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateDownloadUrlResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** OperationType enum. */
                enum OperationType {
                    OPERATION_UNSPECIFIED = 0,
                    CREATE_FUNCTION = 1,
                    UPDATE_FUNCTION = 2,
                    DELETE_FUNCTION = 3
                }

                /** Properties of an OperationMetadataV1. */
                interface IOperationMetadataV1 {

                    /** OperationMetadataV1 target */
                    target?: (string|null);

                    /** OperationMetadataV1 type */
                    type?: (google.cloud.functions.v1.OperationType|keyof typeof google.cloud.functions.v1.OperationType|null);

                    /** OperationMetadataV1 request */
                    request?: (google.protobuf.IAny|null);

                    /** OperationMetadataV1 versionId */
                    versionId?: (number|Long|string|null);

                    /** OperationMetadataV1 updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadataV1 buildId */
                    buildId?: (string|null);

                    /** OperationMetadataV1 sourceToken */
                    sourceToken?: (string|null);

                    /** OperationMetadataV1 buildName */
                    buildName?: (string|null);
                }

                /** Represents an OperationMetadataV1. */
                class OperationMetadataV1 implements IOperationMetadataV1 {

                    /**
                     * Constructs a new OperationMetadataV1.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v1.IOperationMetadataV1);

                    /** OperationMetadataV1 target. */
                    public target: string;

                    /** OperationMetadataV1 type. */
                    public type: (google.cloud.functions.v1.OperationType|keyof typeof google.cloud.functions.v1.OperationType);

                    /** OperationMetadataV1 request. */
                    public request?: (google.protobuf.IAny|null);

                    /** OperationMetadataV1 versionId. */
                    public versionId: (number|Long|string);

                    /** OperationMetadataV1 updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadataV1 buildId. */
                    public buildId: string;

                    /** OperationMetadataV1 sourceToken. */
                    public sourceToken: string;

                    /** OperationMetadataV1 buildName. */
                    public buildName: string;

                    /**
                     * Creates a new OperationMetadataV1 instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadataV1 instance
                     */
                    public static create(properties?: google.cloud.functions.v1.IOperationMetadataV1): google.cloud.functions.v1.OperationMetadataV1;

                    /**
                     * Encodes the specified OperationMetadataV1 message. Does not implicitly {@link google.cloud.functions.v1.OperationMetadataV1.verify|verify} messages.
                     * @param message OperationMetadataV1 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v1.IOperationMetadataV1, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadataV1 message, length delimited. Does not implicitly {@link google.cloud.functions.v1.OperationMetadataV1.verify|verify} messages.
                     * @param message OperationMetadataV1 message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v1.IOperationMetadataV1, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadataV1 message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadataV1
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v1.OperationMetadataV1;

                    /**
                     * Decodes an OperationMetadataV1 message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadataV1
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v1.OperationMetadataV1;

                    /**
                     * Verifies an OperationMetadataV1 message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperationMetadataV1 message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperationMetadataV1
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v1.OperationMetadataV1;

                    /**
                     * Creates a plain object from an OperationMetadataV1 message. Also converts values to other types if specified.
                     * @param message OperationMetadataV1
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v1.OperationMetadataV1, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadataV1 to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace v2. */
            namespace v2 {

                /** Represents a FunctionService */
                class FunctionService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new FunctionService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new FunctionService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): FunctionService;

                    /**
                     * Calls GetFunction.
                     * @param request GetFunctionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Function
                     */
                    public getFunction(request: google.cloud.functions.v2.IGetFunctionRequest, callback: google.cloud.functions.v2.FunctionService.GetFunctionCallback): void;

                    /**
                     * Calls GetFunction.
                     * @param request GetFunctionRequest message or plain object
                     * @returns Promise
                     */
                    public getFunction(request: google.cloud.functions.v2.IGetFunctionRequest): Promise<google.cloud.functions.v2.Function>;

                    /**
                     * Calls ListFunctions.
                     * @param request ListFunctionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFunctionsResponse
                     */
                    public listFunctions(request: google.cloud.functions.v2.IListFunctionsRequest, callback: google.cloud.functions.v2.FunctionService.ListFunctionsCallback): void;

                    /**
                     * Calls ListFunctions.
                     * @param request ListFunctionsRequest message or plain object
                     * @returns Promise
                     */
                    public listFunctions(request: google.cloud.functions.v2.IListFunctionsRequest): Promise<google.cloud.functions.v2.ListFunctionsResponse>;

                    /**
                     * Calls CreateFunction.
                     * @param request CreateFunctionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createFunction(request: google.cloud.functions.v2.ICreateFunctionRequest, callback: google.cloud.functions.v2.FunctionService.CreateFunctionCallback): void;

                    /**
                     * Calls CreateFunction.
                     * @param request CreateFunctionRequest message or plain object
                     * @returns Promise
                     */
                    public createFunction(request: google.cloud.functions.v2.ICreateFunctionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateFunction.
                     * @param request UpdateFunctionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateFunction(request: google.cloud.functions.v2.IUpdateFunctionRequest, callback: google.cloud.functions.v2.FunctionService.UpdateFunctionCallback): void;

                    /**
                     * Calls UpdateFunction.
                     * @param request UpdateFunctionRequest message or plain object
                     * @returns Promise
                     */
                    public updateFunction(request: google.cloud.functions.v2.IUpdateFunctionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteFunction.
                     * @param request DeleteFunctionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteFunction(request: google.cloud.functions.v2.IDeleteFunctionRequest, callback: google.cloud.functions.v2.FunctionService.DeleteFunctionCallback): void;

                    /**
                     * Calls DeleteFunction.
                     * @param request DeleteFunctionRequest message or plain object
                     * @returns Promise
                     */
                    public deleteFunction(request: google.cloud.functions.v2.IDeleteFunctionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GenerateUploadUrl.
                     * @param request GenerateUploadUrlRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateUploadUrlResponse
                     */
                    public generateUploadUrl(request: google.cloud.functions.v2.IGenerateUploadUrlRequest, callback: google.cloud.functions.v2.FunctionService.GenerateUploadUrlCallback): void;

                    /**
                     * Calls GenerateUploadUrl.
                     * @param request GenerateUploadUrlRequest message or plain object
                     * @returns Promise
                     */
                    public generateUploadUrl(request: google.cloud.functions.v2.IGenerateUploadUrlRequest): Promise<google.cloud.functions.v2.GenerateUploadUrlResponse>;

                    /**
                     * Calls GenerateDownloadUrl.
                     * @param request GenerateDownloadUrlRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateDownloadUrlResponse
                     */
                    public generateDownloadUrl(request: google.cloud.functions.v2.IGenerateDownloadUrlRequest, callback: google.cloud.functions.v2.FunctionService.GenerateDownloadUrlCallback): void;

                    /**
                     * Calls GenerateDownloadUrl.
                     * @param request GenerateDownloadUrlRequest message or plain object
                     * @returns Promise
                     */
                    public generateDownloadUrl(request: google.cloud.functions.v2.IGenerateDownloadUrlRequest): Promise<google.cloud.functions.v2.GenerateDownloadUrlResponse>;

                    /**
                     * Calls ListRuntimes.
                     * @param request ListRuntimesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRuntimesResponse
                     */
                    public listRuntimes(request: google.cloud.functions.v2.IListRuntimesRequest, callback: google.cloud.functions.v2.FunctionService.ListRuntimesCallback): void;

                    /**
                     * Calls ListRuntimes.
                     * @param request ListRuntimesRequest message or plain object
                     * @returns Promise
                     */
                    public listRuntimes(request: google.cloud.functions.v2.IListRuntimesRequest): Promise<google.cloud.functions.v2.ListRuntimesResponse>;
                }

                namespace FunctionService {

                    /**
                     * Callback as used by {@link google.cloud.functions.v2.FunctionService#getFunction}.
                     * @param error Error, if any
                     * @param [response] Function
                     */
                    type GetFunctionCallback = (error: (Error|null), response?: google.cloud.functions.v2.Function) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v2.FunctionService#listFunctions}.
                     * @param error Error, if any
                     * @param [response] ListFunctionsResponse
                     */
                    type ListFunctionsCallback = (error: (Error|null), response?: google.cloud.functions.v2.ListFunctionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v2.FunctionService#createFunction}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateFunctionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v2.FunctionService#updateFunction}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateFunctionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v2.FunctionService#deleteFunction}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteFunctionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v2.FunctionService#generateUploadUrl}.
                     * @param error Error, if any
                     * @param [response] GenerateUploadUrlResponse
                     */
                    type GenerateUploadUrlCallback = (error: (Error|null), response?: google.cloud.functions.v2.GenerateUploadUrlResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v2.FunctionService#generateDownloadUrl}.
                     * @param error Error, if any
                     * @param [response] GenerateDownloadUrlResponse
                     */
                    type GenerateDownloadUrlCallback = (error: (Error|null), response?: google.cloud.functions.v2.GenerateDownloadUrlResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v2.FunctionService#listRuntimes}.
                     * @param error Error, if any
                     * @param [response] ListRuntimesResponse
                     */
                    type ListRuntimesCallback = (error: (Error|null), response?: google.cloud.functions.v2.ListRuntimesResponse) => void;
                }

                /** Environment enum. */
                enum Environment {
                    ENVIRONMENT_UNSPECIFIED = 0,
                    GEN_1 = 1,
                    GEN_2 = 2
                }

                /** Properties of a Function. */
                interface IFunction {

                    /** Function name */
                    name?: (string|null);

                    /** Function environment */
                    environment?: (google.cloud.functions.v2.Environment|keyof typeof google.cloud.functions.v2.Environment|null);

                    /** Function description */
                    description?: (string|null);

                    /** Function buildConfig */
                    buildConfig?: (google.cloud.functions.v2.IBuildConfig|null);

                    /** Function serviceConfig */
                    serviceConfig?: (google.cloud.functions.v2.IServiceConfig|null);

                    /** Function eventTrigger */
                    eventTrigger?: (google.cloud.functions.v2.IEventTrigger|null);

                    /** Function state */
                    state?: (google.cloud.functions.v2.Function.State|keyof typeof google.cloud.functions.v2.Function.State|null);

                    /** Function updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Function labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Function stateMessages */
                    stateMessages?: (google.cloud.functions.v2.IStateMessage[]|null);
                }

                /** Represents a Function. */
                class Function implements IFunction {

                    /**
                     * Constructs a new Function.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.IFunction);

                    /** Function name. */
                    public name: string;

                    /** Function environment. */
                    public environment: (google.cloud.functions.v2.Environment|keyof typeof google.cloud.functions.v2.Environment);

                    /** Function description. */
                    public description: string;

                    /** Function buildConfig. */
                    public buildConfig?: (google.cloud.functions.v2.IBuildConfig|null);

                    /** Function serviceConfig. */
                    public serviceConfig?: (google.cloud.functions.v2.IServiceConfig|null);

                    /** Function eventTrigger. */
                    public eventTrigger?: (google.cloud.functions.v2.IEventTrigger|null);

                    /** Function state. */
                    public state: (google.cloud.functions.v2.Function.State|keyof typeof google.cloud.functions.v2.Function.State);

                    /** Function updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Function labels. */
                    public labels: { [k: string]: string };

                    /** Function stateMessages. */
                    public stateMessages: google.cloud.functions.v2.IStateMessage[];

                    /**
                     * Creates a new Function instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Function instance
                     */
                    public static create(properties?: google.cloud.functions.v2.IFunction): google.cloud.functions.v2.Function;

                    /**
                     * Encodes the specified Function message. Does not implicitly {@link google.cloud.functions.v2.Function.verify|verify} messages.
                     * @param message Function message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.IFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Function message, length delimited. Does not implicitly {@link google.cloud.functions.v2.Function.verify|verify} messages.
                     * @param message Function message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.IFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Function message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Function
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.Function;

                    /**
                     * Decodes a Function message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Function
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.Function;

                    /**
                     * Verifies a Function message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Function message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Function
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.Function;

                    /**
                     * Creates a plain object from a Function message. Also converts values to other types if specified.
                     * @param message Function
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.Function, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Function to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Function {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        FAILED = 2,
                        DEPLOYING = 3,
                        DELETING = 4,
                        UNKNOWN = 5
                    }
                }

                /** Properties of a StateMessage. */
                interface IStateMessage {

                    /** StateMessage severity */
                    severity?: (google.cloud.functions.v2.StateMessage.Severity|keyof typeof google.cloud.functions.v2.StateMessage.Severity|null);

                    /** StateMessage type */
                    type?: (string|null);

                    /** StateMessage message */
                    message?: (string|null);
                }

                /** Represents a StateMessage. */
                class StateMessage implements IStateMessage {

                    /**
                     * Constructs a new StateMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.IStateMessage);

                    /** StateMessage severity. */
                    public severity: (google.cloud.functions.v2.StateMessage.Severity|keyof typeof google.cloud.functions.v2.StateMessage.Severity);

                    /** StateMessage type. */
                    public type: string;

                    /** StateMessage message. */
                    public message: string;

                    /**
                     * Creates a new StateMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StateMessage instance
                     */
                    public static create(properties?: google.cloud.functions.v2.IStateMessage): google.cloud.functions.v2.StateMessage;

                    /**
                     * Encodes the specified StateMessage message. Does not implicitly {@link google.cloud.functions.v2.StateMessage.verify|verify} messages.
                     * @param message StateMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.IStateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StateMessage message, length delimited. Does not implicitly {@link google.cloud.functions.v2.StateMessage.verify|verify} messages.
                     * @param message StateMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.IStateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StateMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StateMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.StateMessage;

                    /**
                     * Decodes a StateMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StateMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.StateMessage;

                    /**
                     * Verifies a StateMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StateMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StateMessage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.StateMessage;

                    /**
                     * Creates a plain object from a StateMessage message. Also converts values to other types if specified.
                     * @param message StateMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.StateMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StateMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace StateMessage {

                    /** Severity enum. */
                    enum Severity {
                        SEVERITY_UNSPECIFIED = 0,
                        ERROR = 1,
                        WARNING = 2,
                        INFO = 3
                    }
                }

                /** Properties of a StorageSource. */
                interface IStorageSource {

                    /** StorageSource bucket */
                    bucket?: (string|null);

                    /** StorageSource object */
                    object?: (string|null);

                    /** StorageSource generation */
                    generation?: (number|Long|string|null);
                }

                /** Represents a StorageSource. */
                class StorageSource implements IStorageSource {

                    /**
                     * Constructs a new StorageSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.IStorageSource);

                    /** StorageSource bucket. */
                    public bucket: string;

                    /** StorageSource object. */
                    public object: string;

                    /** StorageSource generation. */
                    public generation: (number|Long|string);

                    /**
                     * Creates a new StorageSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StorageSource instance
                     */
                    public static create(properties?: google.cloud.functions.v2.IStorageSource): google.cloud.functions.v2.StorageSource;

                    /**
                     * Encodes the specified StorageSource message. Does not implicitly {@link google.cloud.functions.v2.StorageSource.verify|verify} messages.
                     * @param message StorageSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.IStorageSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StorageSource message, length delimited. Does not implicitly {@link google.cloud.functions.v2.StorageSource.verify|verify} messages.
                     * @param message StorageSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.IStorageSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StorageSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StorageSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.StorageSource;

                    /**
                     * Decodes a StorageSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StorageSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.StorageSource;

                    /**
                     * Verifies a StorageSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StorageSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StorageSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.StorageSource;

                    /**
                     * Creates a plain object from a StorageSource message. Also converts values to other types if specified.
                     * @param message StorageSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.StorageSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StorageSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RepoSource. */
                interface IRepoSource {

                    /** RepoSource branchName */
                    branchName?: (string|null);

                    /** RepoSource tagName */
                    tagName?: (string|null);

                    /** RepoSource commitSha */
                    commitSha?: (string|null);

                    /** RepoSource projectId */
                    projectId?: (string|null);

                    /** RepoSource repoName */
                    repoName?: (string|null);

                    /** RepoSource dir */
                    dir?: (string|null);

                    /** RepoSource invertRegex */
                    invertRegex?: (boolean|null);
                }

                /** Represents a RepoSource. */
                class RepoSource implements IRepoSource {

                    /**
                     * Constructs a new RepoSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.IRepoSource);

                    /** RepoSource branchName. */
                    public branchName?: (string|null);

                    /** RepoSource tagName. */
                    public tagName?: (string|null);

                    /** RepoSource commitSha. */
                    public commitSha?: (string|null);

                    /** RepoSource projectId. */
                    public projectId: string;

                    /** RepoSource repoName. */
                    public repoName: string;

                    /** RepoSource dir. */
                    public dir: string;

                    /** RepoSource invertRegex. */
                    public invertRegex: boolean;

                    /** RepoSource revision. */
                    public revision?: ("branchName"|"tagName"|"commitSha");

                    /**
                     * Creates a new RepoSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RepoSource instance
                     */
                    public static create(properties?: google.cloud.functions.v2.IRepoSource): google.cloud.functions.v2.RepoSource;

                    /**
                     * Encodes the specified RepoSource message. Does not implicitly {@link google.cloud.functions.v2.RepoSource.verify|verify} messages.
                     * @param message RepoSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.IRepoSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RepoSource message, length delimited. Does not implicitly {@link google.cloud.functions.v2.RepoSource.verify|verify} messages.
                     * @param message RepoSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.IRepoSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RepoSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RepoSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.RepoSource;

                    /**
                     * Decodes a RepoSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RepoSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.RepoSource;

                    /**
                     * Verifies a RepoSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RepoSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RepoSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.RepoSource;

                    /**
                     * Creates a plain object from a RepoSource message. Also converts values to other types if specified.
                     * @param message RepoSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.RepoSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RepoSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Source. */
                interface ISource {

                    /** Source storageSource */
                    storageSource?: (google.cloud.functions.v2.IStorageSource|null);

                    /** Source repoSource */
                    repoSource?: (google.cloud.functions.v2.IRepoSource|null);
                }

                /** Represents a Source. */
                class Source implements ISource {

                    /**
                     * Constructs a new Source.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.ISource);

                    /** Source storageSource. */
                    public storageSource?: (google.cloud.functions.v2.IStorageSource|null);

                    /** Source repoSource. */
                    public repoSource?: (google.cloud.functions.v2.IRepoSource|null);

                    /** Source source. */
                    public source?: ("storageSource"|"repoSource");

                    /**
                     * Creates a new Source instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Source instance
                     */
                    public static create(properties?: google.cloud.functions.v2.ISource): google.cloud.functions.v2.Source;

                    /**
                     * Encodes the specified Source message. Does not implicitly {@link google.cloud.functions.v2.Source.verify|verify} messages.
                     * @param message Source message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Source message, length delimited. Does not implicitly {@link google.cloud.functions.v2.Source.verify|verify} messages.
                     * @param message Source message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Source message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Source
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.Source;

                    /**
                     * Decodes a Source message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Source
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.Source;

                    /**
                     * Verifies a Source message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Source message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Source
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.Source;

                    /**
                     * Creates a plain object from a Source message. Also converts values to other types if specified.
                     * @param message Source
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.Source, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Source to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SourceProvenance. */
                interface ISourceProvenance {

                    /** SourceProvenance resolvedStorageSource */
                    resolvedStorageSource?: (google.cloud.functions.v2.IStorageSource|null);

                    /** SourceProvenance resolvedRepoSource */
                    resolvedRepoSource?: (google.cloud.functions.v2.IRepoSource|null);
                }

                /** Represents a SourceProvenance. */
                class SourceProvenance implements ISourceProvenance {

                    /**
                     * Constructs a new SourceProvenance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.ISourceProvenance);

                    /** SourceProvenance resolvedStorageSource. */
                    public resolvedStorageSource?: (google.cloud.functions.v2.IStorageSource|null);

                    /** SourceProvenance resolvedRepoSource. */
                    public resolvedRepoSource?: (google.cloud.functions.v2.IRepoSource|null);

                    /**
                     * Creates a new SourceProvenance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SourceProvenance instance
                     */
                    public static create(properties?: google.cloud.functions.v2.ISourceProvenance): google.cloud.functions.v2.SourceProvenance;

                    /**
                     * Encodes the specified SourceProvenance message. Does not implicitly {@link google.cloud.functions.v2.SourceProvenance.verify|verify} messages.
                     * @param message SourceProvenance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.ISourceProvenance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SourceProvenance message, length delimited. Does not implicitly {@link google.cloud.functions.v2.SourceProvenance.verify|verify} messages.
                     * @param message SourceProvenance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.ISourceProvenance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SourceProvenance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SourceProvenance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.SourceProvenance;

                    /**
                     * Decodes a SourceProvenance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SourceProvenance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.SourceProvenance;

                    /**
                     * Verifies a SourceProvenance message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SourceProvenance message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SourceProvenance
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.SourceProvenance;

                    /**
                     * Creates a plain object from a SourceProvenance message. Also converts values to other types if specified.
                     * @param message SourceProvenance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.SourceProvenance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SourceProvenance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BuildConfig. */
                interface IBuildConfig {

                    /** BuildConfig build */
                    build?: (string|null);

                    /** BuildConfig runtime */
                    runtime?: (string|null);

                    /** BuildConfig entryPoint */
                    entryPoint?: (string|null);

                    /** BuildConfig source */
                    source?: (google.cloud.functions.v2.ISource|null);

                    /** BuildConfig sourceProvenance */
                    sourceProvenance?: (google.cloud.functions.v2.ISourceProvenance|null);

                    /** BuildConfig workerPool */
                    workerPool?: (string|null);

                    /** BuildConfig environmentVariables */
                    environmentVariables?: ({ [k: string]: string }|null);

                    /** BuildConfig dockerRepository */
                    dockerRepository?: (string|null);
                }

                /** Represents a BuildConfig. */
                class BuildConfig implements IBuildConfig {

                    /**
                     * Constructs a new BuildConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.IBuildConfig);

                    /** BuildConfig build. */
                    public build: string;

                    /** BuildConfig runtime. */
                    public runtime: string;

                    /** BuildConfig entryPoint. */
                    public entryPoint: string;

                    /** BuildConfig source. */
                    public source?: (google.cloud.functions.v2.ISource|null);

                    /** BuildConfig sourceProvenance. */
                    public sourceProvenance?: (google.cloud.functions.v2.ISourceProvenance|null);

                    /** BuildConfig workerPool. */
                    public workerPool: string;

                    /** BuildConfig environmentVariables. */
                    public environmentVariables: { [k: string]: string };

                    /** BuildConfig dockerRepository. */
                    public dockerRepository: string;

                    /**
                     * Creates a new BuildConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BuildConfig instance
                     */
                    public static create(properties?: google.cloud.functions.v2.IBuildConfig): google.cloud.functions.v2.BuildConfig;

                    /**
                     * Encodes the specified BuildConfig message. Does not implicitly {@link google.cloud.functions.v2.BuildConfig.verify|verify} messages.
                     * @param message BuildConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.IBuildConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BuildConfig message, length delimited. Does not implicitly {@link google.cloud.functions.v2.BuildConfig.verify|verify} messages.
                     * @param message BuildConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.IBuildConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BuildConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BuildConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.BuildConfig;

                    /**
                     * Decodes a BuildConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BuildConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.BuildConfig;

                    /**
                     * Verifies a BuildConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BuildConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BuildConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.BuildConfig;

                    /**
                     * Creates a plain object from a BuildConfig message. Also converts values to other types if specified.
                     * @param message BuildConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.BuildConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BuildConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ServiceConfig. */
                interface IServiceConfig {

                    /** ServiceConfig service */
                    service?: (string|null);

                    /** ServiceConfig timeoutSeconds */
                    timeoutSeconds?: (number|null);

                    /** ServiceConfig availableMemory */
                    availableMemory?: (string|null);

                    /** ServiceConfig environmentVariables */
                    environmentVariables?: ({ [k: string]: string }|null);

                    /** ServiceConfig maxInstanceCount */
                    maxInstanceCount?: (number|null);

                    /** ServiceConfig minInstanceCount */
                    minInstanceCount?: (number|null);

                    /** ServiceConfig vpcConnector */
                    vpcConnector?: (string|null);

                    /** ServiceConfig vpcConnectorEgressSettings */
                    vpcConnectorEgressSettings?: (google.cloud.functions.v2.ServiceConfig.VpcConnectorEgressSettings|keyof typeof google.cloud.functions.v2.ServiceConfig.VpcConnectorEgressSettings|null);

                    /** ServiceConfig ingressSettings */
                    ingressSettings?: (google.cloud.functions.v2.ServiceConfig.IngressSettings|keyof typeof google.cloud.functions.v2.ServiceConfig.IngressSettings|null);

                    /** ServiceConfig uri */
                    uri?: (string|null);

                    /** ServiceConfig serviceAccountEmail */
                    serviceAccountEmail?: (string|null);

                    /** ServiceConfig allTrafficOnLatestRevision */
                    allTrafficOnLatestRevision?: (boolean|null);

                    /** ServiceConfig secretEnvironmentVariables */
                    secretEnvironmentVariables?: (google.cloud.functions.v2.ISecretEnvVar[]|null);

                    /** ServiceConfig secretVolumes */
                    secretVolumes?: (google.cloud.functions.v2.ISecretVolume[]|null);

                    /** ServiceConfig revision */
                    revision?: (string|null);
                }

                /** Represents a ServiceConfig. */
                class ServiceConfig implements IServiceConfig {

                    /**
                     * Constructs a new ServiceConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.IServiceConfig);

                    /** ServiceConfig service. */
                    public service: string;

                    /** ServiceConfig timeoutSeconds. */
                    public timeoutSeconds: number;

                    /** ServiceConfig availableMemory. */
                    public availableMemory: string;

                    /** ServiceConfig environmentVariables. */
                    public environmentVariables: { [k: string]: string };

                    /** ServiceConfig maxInstanceCount. */
                    public maxInstanceCount: number;

                    /** ServiceConfig minInstanceCount. */
                    public minInstanceCount: number;

                    /** ServiceConfig vpcConnector. */
                    public vpcConnector: string;

                    /** ServiceConfig vpcConnectorEgressSettings. */
                    public vpcConnectorEgressSettings: (google.cloud.functions.v2.ServiceConfig.VpcConnectorEgressSettings|keyof typeof google.cloud.functions.v2.ServiceConfig.VpcConnectorEgressSettings);

                    /** ServiceConfig ingressSettings. */
                    public ingressSettings: (google.cloud.functions.v2.ServiceConfig.IngressSettings|keyof typeof google.cloud.functions.v2.ServiceConfig.IngressSettings);

                    /** ServiceConfig uri. */
                    public uri: string;

                    /** ServiceConfig serviceAccountEmail. */
                    public serviceAccountEmail: string;

                    /** ServiceConfig allTrafficOnLatestRevision. */
                    public allTrafficOnLatestRevision: boolean;

                    /** ServiceConfig secretEnvironmentVariables. */
                    public secretEnvironmentVariables: google.cloud.functions.v2.ISecretEnvVar[];

                    /** ServiceConfig secretVolumes. */
                    public secretVolumes: google.cloud.functions.v2.ISecretVolume[];

                    /** ServiceConfig revision. */
                    public revision: string;

                    /**
                     * Creates a new ServiceConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServiceConfig instance
                     */
                    public static create(properties?: google.cloud.functions.v2.IServiceConfig): google.cloud.functions.v2.ServiceConfig;

                    /**
                     * Encodes the specified ServiceConfig message. Does not implicitly {@link google.cloud.functions.v2.ServiceConfig.verify|verify} messages.
                     * @param message ServiceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.IServiceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServiceConfig message, length delimited. Does not implicitly {@link google.cloud.functions.v2.ServiceConfig.verify|verify} messages.
                     * @param message ServiceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.IServiceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServiceConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServiceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.ServiceConfig;

                    /**
                     * Decodes a ServiceConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServiceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.ServiceConfig;

                    /**
                     * Verifies a ServiceConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServiceConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServiceConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.ServiceConfig;

                    /**
                     * Creates a plain object from a ServiceConfig message. Also converts values to other types if specified.
                     * @param message ServiceConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.ServiceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServiceConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ServiceConfig {

                    /** VpcConnectorEgressSettings enum. */
                    enum VpcConnectorEgressSettings {
                        VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED = 0,
                        PRIVATE_RANGES_ONLY = 1,
                        ALL_TRAFFIC = 2
                    }

                    /** IngressSettings enum. */
                    enum IngressSettings {
                        INGRESS_SETTINGS_UNSPECIFIED = 0,
                        ALLOW_ALL = 1,
                        ALLOW_INTERNAL_ONLY = 2,
                        ALLOW_INTERNAL_AND_GCLB = 3
                    }
                }

                /** Properties of a SecretEnvVar. */
                interface ISecretEnvVar {

                    /** SecretEnvVar key */
                    key?: (string|null);

                    /** SecretEnvVar projectId */
                    projectId?: (string|null);

                    /** SecretEnvVar secret */
                    secret?: (string|null);

                    /** SecretEnvVar version */
                    version?: (string|null);
                }

                /** Represents a SecretEnvVar. */
                class SecretEnvVar implements ISecretEnvVar {

                    /**
                     * Constructs a new SecretEnvVar.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.ISecretEnvVar);

                    /** SecretEnvVar key. */
                    public key: string;

                    /** SecretEnvVar projectId. */
                    public projectId: string;

                    /** SecretEnvVar secret. */
                    public secret: string;

                    /** SecretEnvVar version. */
                    public version: string;

                    /**
                     * Creates a new SecretEnvVar instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SecretEnvVar instance
                     */
                    public static create(properties?: google.cloud.functions.v2.ISecretEnvVar): google.cloud.functions.v2.SecretEnvVar;

                    /**
                     * Encodes the specified SecretEnvVar message. Does not implicitly {@link google.cloud.functions.v2.SecretEnvVar.verify|verify} messages.
                     * @param message SecretEnvVar message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.ISecretEnvVar, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SecretEnvVar message, length delimited. Does not implicitly {@link google.cloud.functions.v2.SecretEnvVar.verify|verify} messages.
                     * @param message SecretEnvVar message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.ISecretEnvVar, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SecretEnvVar message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SecretEnvVar
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.SecretEnvVar;

                    /**
                     * Decodes a SecretEnvVar message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SecretEnvVar
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.SecretEnvVar;

                    /**
                     * Verifies a SecretEnvVar message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SecretEnvVar message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SecretEnvVar
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.SecretEnvVar;

                    /**
                     * Creates a plain object from a SecretEnvVar message. Also converts values to other types if specified.
                     * @param message SecretEnvVar
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.SecretEnvVar, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SecretEnvVar to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SecretVolume. */
                interface ISecretVolume {

                    /** SecretVolume mountPath */
                    mountPath?: (string|null);

                    /** SecretVolume projectId */
                    projectId?: (string|null);

                    /** SecretVolume secret */
                    secret?: (string|null);

                    /** SecretVolume versions */
                    versions?: (google.cloud.functions.v2.SecretVolume.ISecretVersion[]|null);
                }

                /** Represents a SecretVolume. */
                class SecretVolume implements ISecretVolume {

                    /**
                     * Constructs a new SecretVolume.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.ISecretVolume);

                    /** SecretVolume mountPath. */
                    public mountPath: string;

                    /** SecretVolume projectId. */
                    public projectId: string;

                    /** SecretVolume secret. */
                    public secret: string;

                    /** SecretVolume versions. */
                    public versions: google.cloud.functions.v2.SecretVolume.ISecretVersion[];

                    /**
                     * Creates a new SecretVolume instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SecretVolume instance
                     */
                    public static create(properties?: google.cloud.functions.v2.ISecretVolume): google.cloud.functions.v2.SecretVolume;

                    /**
                     * Encodes the specified SecretVolume message. Does not implicitly {@link google.cloud.functions.v2.SecretVolume.verify|verify} messages.
                     * @param message SecretVolume message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.ISecretVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SecretVolume message, length delimited. Does not implicitly {@link google.cloud.functions.v2.SecretVolume.verify|verify} messages.
                     * @param message SecretVolume message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.ISecretVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SecretVolume message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SecretVolume
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.SecretVolume;

                    /**
                     * Decodes a SecretVolume message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SecretVolume
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.SecretVolume;

                    /**
                     * Verifies a SecretVolume message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SecretVolume message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SecretVolume
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.SecretVolume;

                    /**
                     * Creates a plain object from a SecretVolume message. Also converts values to other types if specified.
                     * @param message SecretVolume
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.SecretVolume, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SecretVolume to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SecretVolume {

                    /** Properties of a SecretVersion. */
                    interface ISecretVersion {

                        /** SecretVersion version */
                        version?: (string|null);

                        /** SecretVersion path */
                        path?: (string|null);
                    }

                    /** Represents a SecretVersion. */
                    class SecretVersion implements ISecretVersion {

                        /**
                         * Constructs a new SecretVersion.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.functions.v2.SecretVolume.ISecretVersion);

                        /** SecretVersion version. */
                        public version: string;

                        /** SecretVersion path. */
                        public path: string;

                        /**
                         * Creates a new SecretVersion instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SecretVersion instance
                         */
                        public static create(properties?: google.cloud.functions.v2.SecretVolume.ISecretVersion): google.cloud.functions.v2.SecretVolume.SecretVersion;

                        /**
                         * Encodes the specified SecretVersion message. Does not implicitly {@link google.cloud.functions.v2.SecretVolume.SecretVersion.verify|verify} messages.
                         * @param message SecretVersion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.functions.v2.SecretVolume.ISecretVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SecretVersion message, length delimited. Does not implicitly {@link google.cloud.functions.v2.SecretVolume.SecretVersion.verify|verify} messages.
                         * @param message SecretVersion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.functions.v2.SecretVolume.ISecretVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SecretVersion message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SecretVersion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.SecretVolume.SecretVersion;

                        /**
                         * Decodes a SecretVersion message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SecretVersion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.SecretVolume.SecretVersion;

                        /**
                         * Verifies a SecretVersion message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SecretVersion message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SecretVersion
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.SecretVolume.SecretVersion;

                        /**
                         * Creates a plain object from a SecretVersion message. Also converts values to other types if specified.
                         * @param message SecretVersion
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.functions.v2.SecretVolume.SecretVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SecretVersion to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of an EventTrigger. */
                interface IEventTrigger {

                    /** EventTrigger trigger */
                    trigger?: (string|null);

                    /** EventTrigger triggerRegion */
                    triggerRegion?: (string|null);

                    /** EventTrigger eventType */
                    eventType?: (string|null);

                    /** EventTrigger eventFilters */
                    eventFilters?: (google.cloud.functions.v2.IEventFilter[]|null);

                    /** EventTrigger pubsubTopic */
                    pubsubTopic?: (string|null);

                    /** EventTrigger serviceAccountEmail */
                    serviceAccountEmail?: (string|null);

                    /** EventTrigger retryPolicy */
                    retryPolicy?: (google.cloud.functions.v2.EventTrigger.RetryPolicy|keyof typeof google.cloud.functions.v2.EventTrigger.RetryPolicy|null);

                    /** EventTrigger channel */
                    channel?: (string|null);
                }

                /** Represents an EventTrigger. */
                class EventTrigger implements IEventTrigger {

                    /**
                     * Constructs a new EventTrigger.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.IEventTrigger);

                    /** EventTrigger trigger. */
                    public trigger: string;

                    /** EventTrigger triggerRegion. */
                    public triggerRegion: string;

                    /** EventTrigger eventType. */
                    public eventType: string;

                    /** EventTrigger eventFilters. */
                    public eventFilters: google.cloud.functions.v2.IEventFilter[];

                    /** EventTrigger pubsubTopic. */
                    public pubsubTopic: string;

                    /** EventTrigger serviceAccountEmail. */
                    public serviceAccountEmail: string;

                    /** EventTrigger retryPolicy. */
                    public retryPolicy: (google.cloud.functions.v2.EventTrigger.RetryPolicy|keyof typeof google.cloud.functions.v2.EventTrigger.RetryPolicy);

                    /** EventTrigger channel. */
                    public channel: string;

                    /**
                     * Creates a new EventTrigger instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EventTrigger instance
                     */
                    public static create(properties?: google.cloud.functions.v2.IEventTrigger): google.cloud.functions.v2.EventTrigger;

                    /**
                     * Encodes the specified EventTrigger message. Does not implicitly {@link google.cloud.functions.v2.EventTrigger.verify|verify} messages.
                     * @param message EventTrigger message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.IEventTrigger, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EventTrigger message, length delimited. Does not implicitly {@link google.cloud.functions.v2.EventTrigger.verify|verify} messages.
                     * @param message EventTrigger message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.IEventTrigger, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EventTrigger message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EventTrigger
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.EventTrigger;

                    /**
                     * Decodes an EventTrigger message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EventTrigger
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.EventTrigger;

                    /**
                     * Verifies an EventTrigger message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EventTrigger message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EventTrigger
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.EventTrigger;

                    /**
                     * Creates a plain object from an EventTrigger message. Also converts values to other types if specified.
                     * @param message EventTrigger
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.EventTrigger, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EventTrigger to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace EventTrigger {

                    /** RetryPolicy enum. */
                    enum RetryPolicy {
                        RETRY_POLICY_UNSPECIFIED = 0,
                        RETRY_POLICY_DO_NOT_RETRY = 1,
                        RETRY_POLICY_RETRY = 2
                    }
                }

                /** Properties of an EventFilter. */
                interface IEventFilter {

                    /** EventFilter attribute */
                    attribute?: (string|null);

                    /** EventFilter value */
                    value?: (string|null);

                    /** EventFilter operator */
                    operator?: (string|null);
                }

                /** Represents an EventFilter. */
                class EventFilter implements IEventFilter {

                    /**
                     * Constructs a new EventFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.IEventFilter);

                    /** EventFilter attribute. */
                    public attribute: string;

                    /** EventFilter value. */
                    public value: string;

                    /** EventFilter operator. */
                    public operator: string;

                    /**
                     * Creates a new EventFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EventFilter instance
                     */
                    public static create(properties?: google.cloud.functions.v2.IEventFilter): google.cloud.functions.v2.EventFilter;

                    /**
                     * Encodes the specified EventFilter message. Does not implicitly {@link google.cloud.functions.v2.EventFilter.verify|verify} messages.
                     * @param message EventFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.IEventFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EventFilter message, length delimited. Does not implicitly {@link google.cloud.functions.v2.EventFilter.verify|verify} messages.
                     * @param message EventFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.IEventFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EventFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EventFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.EventFilter;

                    /**
                     * Decodes an EventFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EventFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.EventFilter;

                    /**
                     * Verifies an EventFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EventFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EventFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.EventFilter;

                    /**
                     * Creates a plain object from an EventFilter message. Also converts values to other types if specified.
                     * @param message EventFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.EventFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EventFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetFunctionRequest. */
                interface IGetFunctionRequest {

                    /** GetFunctionRequest name */
                    name?: (string|null);
                }

                /** Represents a GetFunctionRequest. */
                class GetFunctionRequest implements IGetFunctionRequest {

                    /**
                     * Constructs a new GetFunctionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.IGetFunctionRequest);

                    /** GetFunctionRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetFunctionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetFunctionRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2.IGetFunctionRequest): google.cloud.functions.v2.GetFunctionRequest;

                    /**
                     * Encodes the specified GetFunctionRequest message. Does not implicitly {@link google.cloud.functions.v2.GetFunctionRequest.verify|verify} messages.
                     * @param message GetFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.IGetFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetFunctionRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2.GetFunctionRequest.verify|verify} messages.
                     * @param message GetFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.IGetFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetFunctionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.GetFunctionRequest;

                    /**
                     * Decodes a GetFunctionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.GetFunctionRequest;

                    /**
                     * Verifies a GetFunctionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetFunctionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetFunctionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.GetFunctionRequest;

                    /**
                     * Creates a plain object from a GetFunctionRequest message. Also converts values to other types if specified.
                     * @param message GetFunctionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.GetFunctionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetFunctionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFunctionsRequest. */
                interface IListFunctionsRequest {

                    /** ListFunctionsRequest parent */
                    parent?: (string|null);

                    /** ListFunctionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListFunctionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListFunctionsRequest filter */
                    filter?: (string|null);

                    /** ListFunctionsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListFunctionsRequest. */
                class ListFunctionsRequest implements IListFunctionsRequest {

                    /**
                     * Constructs a new ListFunctionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.IListFunctionsRequest);

                    /** ListFunctionsRequest parent. */
                    public parent: string;

                    /** ListFunctionsRequest pageSize. */
                    public pageSize: number;

                    /** ListFunctionsRequest pageToken. */
                    public pageToken: string;

                    /** ListFunctionsRequest filter. */
                    public filter: string;

                    /** ListFunctionsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListFunctionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFunctionsRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2.IListFunctionsRequest): google.cloud.functions.v2.ListFunctionsRequest;

                    /**
                     * Encodes the specified ListFunctionsRequest message. Does not implicitly {@link google.cloud.functions.v2.ListFunctionsRequest.verify|verify} messages.
                     * @param message ListFunctionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.IListFunctionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFunctionsRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2.ListFunctionsRequest.verify|verify} messages.
                     * @param message ListFunctionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.IListFunctionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFunctionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFunctionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.ListFunctionsRequest;

                    /**
                     * Decodes a ListFunctionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFunctionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.ListFunctionsRequest;

                    /**
                     * Verifies a ListFunctionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFunctionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFunctionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.ListFunctionsRequest;

                    /**
                     * Creates a plain object from a ListFunctionsRequest message. Also converts values to other types if specified.
                     * @param message ListFunctionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.ListFunctionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFunctionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFunctionsResponse. */
                interface IListFunctionsResponse {

                    /** ListFunctionsResponse functions */
                    functions?: (google.cloud.functions.v2.IFunction[]|null);

                    /** ListFunctionsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListFunctionsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListFunctionsResponse. */
                class ListFunctionsResponse implements IListFunctionsResponse {

                    /**
                     * Constructs a new ListFunctionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.IListFunctionsResponse);

                    /** ListFunctionsResponse functions. */
                    public functions: google.cloud.functions.v2.IFunction[];

                    /** ListFunctionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListFunctionsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListFunctionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFunctionsResponse instance
                     */
                    public static create(properties?: google.cloud.functions.v2.IListFunctionsResponse): google.cloud.functions.v2.ListFunctionsResponse;

                    /**
                     * Encodes the specified ListFunctionsResponse message. Does not implicitly {@link google.cloud.functions.v2.ListFunctionsResponse.verify|verify} messages.
                     * @param message ListFunctionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.IListFunctionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFunctionsResponse message, length delimited. Does not implicitly {@link google.cloud.functions.v2.ListFunctionsResponse.verify|verify} messages.
                     * @param message ListFunctionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.IListFunctionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFunctionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFunctionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.ListFunctionsResponse;

                    /**
                     * Decodes a ListFunctionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFunctionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.ListFunctionsResponse;

                    /**
                     * Verifies a ListFunctionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFunctionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFunctionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.ListFunctionsResponse;

                    /**
                     * Creates a plain object from a ListFunctionsResponse message. Also converts values to other types if specified.
                     * @param message ListFunctionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.ListFunctionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFunctionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateFunctionRequest. */
                interface ICreateFunctionRequest {

                    /** CreateFunctionRequest parent */
                    parent?: (string|null);

                    /** CreateFunctionRequest function */
                    "function"?: (google.cloud.functions.v2.IFunction|null);

                    /** CreateFunctionRequest functionId */
                    functionId?: (string|null);
                }

                /** Represents a CreateFunctionRequest. */
                class CreateFunctionRequest implements ICreateFunctionRequest {

                    /**
                     * Constructs a new CreateFunctionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.ICreateFunctionRequest);

                    /** CreateFunctionRequest parent. */
                    public parent: string;

                    /** CreateFunctionRequest function. */
                    public function?: (google.cloud.functions.v2.IFunction|null);

                    /** CreateFunctionRequest functionId. */
                    public functionId: string;

                    /**
                     * Creates a new CreateFunctionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateFunctionRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2.ICreateFunctionRequest): google.cloud.functions.v2.CreateFunctionRequest;

                    /**
                     * Encodes the specified CreateFunctionRequest message. Does not implicitly {@link google.cloud.functions.v2.CreateFunctionRequest.verify|verify} messages.
                     * @param message CreateFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.ICreateFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateFunctionRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2.CreateFunctionRequest.verify|verify} messages.
                     * @param message CreateFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.ICreateFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateFunctionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.CreateFunctionRequest;

                    /**
                     * Decodes a CreateFunctionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.CreateFunctionRequest;

                    /**
                     * Verifies a CreateFunctionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateFunctionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateFunctionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.CreateFunctionRequest;

                    /**
                     * Creates a plain object from a CreateFunctionRequest message. Also converts values to other types if specified.
                     * @param message CreateFunctionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.CreateFunctionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateFunctionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateFunctionRequest. */
                interface IUpdateFunctionRequest {

                    /** UpdateFunctionRequest function */
                    "function"?: (google.cloud.functions.v2.IFunction|null);

                    /** UpdateFunctionRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateFunctionRequest. */
                class UpdateFunctionRequest implements IUpdateFunctionRequest {

                    /**
                     * Constructs a new UpdateFunctionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.IUpdateFunctionRequest);

                    /** UpdateFunctionRequest function. */
                    public function?: (google.cloud.functions.v2.IFunction|null);

                    /** UpdateFunctionRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateFunctionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateFunctionRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2.IUpdateFunctionRequest): google.cloud.functions.v2.UpdateFunctionRequest;

                    /**
                     * Encodes the specified UpdateFunctionRequest message. Does not implicitly {@link google.cloud.functions.v2.UpdateFunctionRequest.verify|verify} messages.
                     * @param message UpdateFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.IUpdateFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateFunctionRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2.UpdateFunctionRequest.verify|verify} messages.
                     * @param message UpdateFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.IUpdateFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateFunctionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.UpdateFunctionRequest;

                    /**
                     * Decodes an UpdateFunctionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.UpdateFunctionRequest;

                    /**
                     * Verifies an UpdateFunctionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateFunctionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateFunctionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.UpdateFunctionRequest;

                    /**
                     * Creates a plain object from an UpdateFunctionRequest message. Also converts values to other types if specified.
                     * @param message UpdateFunctionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.UpdateFunctionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateFunctionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteFunctionRequest. */
                interface IDeleteFunctionRequest {

                    /** DeleteFunctionRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteFunctionRequest. */
                class DeleteFunctionRequest implements IDeleteFunctionRequest {

                    /**
                     * Constructs a new DeleteFunctionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.IDeleteFunctionRequest);

                    /** DeleteFunctionRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteFunctionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteFunctionRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2.IDeleteFunctionRequest): google.cloud.functions.v2.DeleteFunctionRequest;

                    /**
                     * Encodes the specified DeleteFunctionRequest message. Does not implicitly {@link google.cloud.functions.v2.DeleteFunctionRequest.verify|verify} messages.
                     * @param message DeleteFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.IDeleteFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteFunctionRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2.DeleteFunctionRequest.verify|verify} messages.
                     * @param message DeleteFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.IDeleteFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteFunctionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.DeleteFunctionRequest;

                    /**
                     * Decodes a DeleteFunctionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.DeleteFunctionRequest;

                    /**
                     * Verifies a DeleteFunctionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteFunctionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteFunctionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.DeleteFunctionRequest;

                    /**
                     * Creates a plain object from a DeleteFunctionRequest message. Also converts values to other types if specified.
                     * @param message DeleteFunctionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.DeleteFunctionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteFunctionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GenerateUploadUrlRequest. */
                interface IGenerateUploadUrlRequest {

                    /** GenerateUploadUrlRequest parent */
                    parent?: (string|null);
                }

                /** Represents a GenerateUploadUrlRequest. */
                class GenerateUploadUrlRequest implements IGenerateUploadUrlRequest {

                    /**
                     * Constructs a new GenerateUploadUrlRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.IGenerateUploadUrlRequest);

                    /** GenerateUploadUrlRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new GenerateUploadUrlRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateUploadUrlRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2.IGenerateUploadUrlRequest): google.cloud.functions.v2.GenerateUploadUrlRequest;

                    /**
                     * Encodes the specified GenerateUploadUrlRequest message. Does not implicitly {@link google.cloud.functions.v2.GenerateUploadUrlRequest.verify|verify} messages.
                     * @param message GenerateUploadUrlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.IGenerateUploadUrlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateUploadUrlRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2.GenerateUploadUrlRequest.verify|verify} messages.
                     * @param message GenerateUploadUrlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.IGenerateUploadUrlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateUploadUrlRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateUploadUrlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.GenerateUploadUrlRequest;

                    /**
                     * Decodes a GenerateUploadUrlRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateUploadUrlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.GenerateUploadUrlRequest;

                    /**
                     * Verifies a GenerateUploadUrlRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateUploadUrlRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateUploadUrlRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.GenerateUploadUrlRequest;

                    /**
                     * Creates a plain object from a GenerateUploadUrlRequest message. Also converts values to other types if specified.
                     * @param message GenerateUploadUrlRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.GenerateUploadUrlRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateUploadUrlRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GenerateUploadUrlResponse. */
                interface IGenerateUploadUrlResponse {

                    /** GenerateUploadUrlResponse uploadUrl */
                    uploadUrl?: (string|null);

                    /** GenerateUploadUrlResponse storageSource */
                    storageSource?: (google.cloud.functions.v2.IStorageSource|null);
                }

                /** Represents a GenerateUploadUrlResponse. */
                class GenerateUploadUrlResponse implements IGenerateUploadUrlResponse {

                    /**
                     * Constructs a new GenerateUploadUrlResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.IGenerateUploadUrlResponse);

                    /** GenerateUploadUrlResponse uploadUrl. */
                    public uploadUrl: string;

                    /** GenerateUploadUrlResponse storageSource. */
                    public storageSource?: (google.cloud.functions.v2.IStorageSource|null);

                    /**
                     * Creates a new GenerateUploadUrlResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateUploadUrlResponse instance
                     */
                    public static create(properties?: google.cloud.functions.v2.IGenerateUploadUrlResponse): google.cloud.functions.v2.GenerateUploadUrlResponse;

                    /**
                     * Encodes the specified GenerateUploadUrlResponse message. Does not implicitly {@link google.cloud.functions.v2.GenerateUploadUrlResponse.verify|verify} messages.
                     * @param message GenerateUploadUrlResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.IGenerateUploadUrlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateUploadUrlResponse message, length delimited. Does not implicitly {@link google.cloud.functions.v2.GenerateUploadUrlResponse.verify|verify} messages.
                     * @param message GenerateUploadUrlResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.IGenerateUploadUrlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateUploadUrlResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateUploadUrlResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.GenerateUploadUrlResponse;

                    /**
                     * Decodes a GenerateUploadUrlResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateUploadUrlResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.GenerateUploadUrlResponse;

                    /**
                     * Verifies a GenerateUploadUrlResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateUploadUrlResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateUploadUrlResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.GenerateUploadUrlResponse;

                    /**
                     * Creates a plain object from a GenerateUploadUrlResponse message. Also converts values to other types if specified.
                     * @param message GenerateUploadUrlResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.GenerateUploadUrlResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateUploadUrlResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GenerateDownloadUrlRequest. */
                interface IGenerateDownloadUrlRequest {

                    /** GenerateDownloadUrlRequest name */
                    name?: (string|null);
                }

                /** Represents a GenerateDownloadUrlRequest. */
                class GenerateDownloadUrlRequest implements IGenerateDownloadUrlRequest {

                    /**
                     * Constructs a new GenerateDownloadUrlRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.IGenerateDownloadUrlRequest);

                    /** GenerateDownloadUrlRequest name. */
                    public name: string;

                    /**
                     * Creates a new GenerateDownloadUrlRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateDownloadUrlRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2.IGenerateDownloadUrlRequest): google.cloud.functions.v2.GenerateDownloadUrlRequest;

                    /**
                     * Encodes the specified GenerateDownloadUrlRequest message. Does not implicitly {@link google.cloud.functions.v2.GenerateDownloadUrlRequest.verify|verify} messages.
                     * @param message GenerateDownloadUrlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.IGenerateDownloadUrlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateDownloadUrlRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2.GenerateDownloadUrlRequest.verify|verify} messages.
                     * @param message GenerateDownloadUrlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.IGenerateDownloadUrlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateDownloadUrlRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateDownloadUrlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.GenerateDownloadUrlRequest;

                    /**
                     * Decodes a GenerateDownloadUrlRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateDownloadUrlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.GenerateDownloadUrlRequest;

                    /**
                     * Verifies a GenerateDownloadUrlRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateDownloadUrlRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateDownloadUrlRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.GenerateDownloadUrlRequest;

                    /**
                     * Creates a plain object from a GenerateDownloadUrlRequest message. Also converts values to other types if specified.
                     * @param message GenerateDownloadUrlRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.GenerateDownloadUrlRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateDownloadUrlRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GenerateDownloadUrlResponse. */
                interface IGenerateDownloadUrlResponse {

                    /** GenerateDownloadUrlResponse downloadUrl */
                    downloadUrl?: (string|null);
                }

                /** Represents a GenerateDownloadUrlResponse. */
                class GenerateDownloadUrlResponse implements IGenerateDownloadUrlResponse {

                    /**
                     * Constructs a new GenerateDownloadUrlResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.IGenerateDownloadUrlResponse);

                    /** GenerateDownloadUrlResponse downloadUrl. */
                    public downloadUrl: string;

                    /**
                     * Creates a new GenerateDownloadUrlResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateDownloadUrlResponse instance
                     */
                    public static create(properties?: google.cloud.functions.v2.IGenerateDownloadUrlResponse): google.cloud.functions.v2.GenerateDownloadUrlResponse;

                    /**
                     * Encodes the specified GenerateDownloadUrlResponse message. Does not implicitly {@link google.cloud.functions.v2.GenerateDownloadUrlResponse.verify|verify} messages.
                     * @param message GenerateDownloadUrlResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.IGenerateDownloadUrlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateDownloadUrlResponse message, length delimited. Does not implicitly {@link google.cloud.functions.v2.GenerateDownloadUrlResponse.verify|verify} messages.
                     * @param message GenerateDownloadUrlResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.IGenerateDownloadUrlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateDownloadUrlResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateDownloadUrlResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.GenerateDownloadUrlResponse;

                    /**
                     * Decodes a GenerateDownloadUrlResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateDownloadUrlResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.GenerateDownloadUrlResponse;

                    /**
                     * Verifies a GenerateDownloadUrlResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateDownloadUrlResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateDownloadUrlResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.GenerateDownloadUrlResponse;

                    /**
                     * Creates a plain object from a GenerateDownloadUrlResponse message. Also converts values to other types if specified.
                     * @param message GenerateDownloadUrlResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.GenerateDownloadUrlResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateDownloadUrlResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListRuntimesRequest. */
                interface IListRuntimesRequest {

                    /** ListRuntimesRequest parent */
                    parent?: (string|null);

                    /** ListRuntimesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListRuntimesRequest. */
                class ListRuntimesRequest implements IListRuntimesRequest {

                    /**
                     * Constructs a new ListRuntimesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.IListRuntimesRequest);

                    /** ListRuntimesRequest parent. */
                    public parent: string;

                    /** ListRuntimesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListRuntimesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRuntimesRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2.IListRuntimesRequest): google.cloud.functions.v2.ListRuntimesRequest;

                    /**
                     * Encodes the specified ListRuntimesRequest message. Does not implicitly {@link google.cloud.functions.v2.ListRuntimesRequest.verify|verify} messages.
                     * @param message ListRuntimesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.IListRuntimesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRuntimesRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2.ListRuntimesRequest.verify|verify} messages.
                     * @param message ListRuntimesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.IListRuntimesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRuntimesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRuntimesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.ListRuntimesRequest;

                    /**
                     * Decodes a ListRuntimesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRuntimesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.ListRuntimesRequest;

                    /**
                     * Verifies a ListRuntimesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRuntimesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRuntimesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.ListRuntimesRequest;

                    /**
                     * Creates a plain object from a ListRuntimesRequest message. Also converts values to other types if specified.
                     * @param message ListRuntimesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.ListRuntimesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRuntimesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListRuntimesResponse. */
                interface IListRuntimesResponse {

                    /** ListRuntimesResponse runtimes */
                    runtimes?: (google.cloud.functions.v2.ListRuntimesResponse.IRuntime[]|null);
                }

                /** Represents a ListRuntimesResponse. */
                class ListRuntimesResponse implements IListRuntimesResponse {

                    /**
                     * Constructs a new ListRuntimesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.IListRuntimesResponse);

                    /** ListRuntimesResponse runtimes. */
                    public runtimes: google.cloud.functions.v2.ListRuntimesResponse.IRuntime[];

                    /**
                     * Creates a new ListRuntimesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRuntimesResponse instance
                     */
                    public static create(properties?: google.cloud.functions.v2.IListRuntimesResponse): google.cloud.functions.v2.ListRuntimesResponse;

                    /**
                     * Encodes the specified ListRuntimesResponse message. Does not implicitly {@link google.cloud.functions.v2.ListRuntimesResponse.verify|verify} messages.
                     * @param message ListRuntimesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.IListRuntimesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRuntimesResponse message, length delimited. Does not implicitly {@link google.cloud.functions.v2.ListRuntimesResponse.verify|verify} messages.
                     * @param message ListRuntimesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.IListRuntimesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRuntimesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRuntimesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.ListRuntimesResponse;

                    /**
                     * Decodes a ListRuntimesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRuntimesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.ListRuntimesResponse;

                    /**
                     * Verifies a ListRuntimesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRuntimesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRuntimesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.ListRuntimesResponse;

                    /**
                     * Creates a plain object from a ListRuntimesResponse message. Also converts values to other types if specified.
                     * @param message ListRuntimesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.ListRuntimesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRuntimesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ListRuntimesResponse {

                    /** Properties of a Runtime. */
                    interface IRuntime {

                        /** Runtime name */
                        name?: (string|null);

                        /** Runtime displayName */
                        displayName?: (string|null);

                        /** Runtime stage */
                        stage?: (google.cloud.functions.v2.ListRuntimesResponse.RuntimeStage|keyof typeof google.cloud.functions.v2.ListRuntimesResponse.RuntimeStage|null);

                        /** Runtime warnings */
                        warnings?: (string[]|null);

                        /** Runtime environment */
                        environment?: (google.cloud.functions.v2.Environment|keyof typeof google.cloud.functions.v2.Environment|null);
                    }

                    /** Represents a Runtime. */
                    class Runtime implements IRuntime {

                        /**
                         * Constructs a new Runtime.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.functions.v2.ListRuntimesResponse.IRuntime);

                        /** Runtime name. */
                        public name: string;

                        /** Runtime displayName. */
                        public displayName: string;

                        /** Runtime stage. */
                        public stage: (google.cloud.functions.v2.ListRuntimesResponse.RuntimeStage|keyof typeof google.cloud.functions.v2.ListRuntimesResponse.RuntimeStage);

                        /** Runtime warnings. */
                        public warnings: string[];

                        /** Runtime environment. */
                        public environment: (google.cloud.functions.v2.Environment|keyof typeof google.cloud.functions.v2.Environment);

                        /**
                         * Creates a new Runtime instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Runtime instance
                         */
                        public static create(properties?: google.cloud.functions.v2.ListRuntimesResponse.IRuntime): google.cloud.functions.v2.ListRuntimesResponse.Runtime;

                        /**
                         * Encodes the specified Runtime message. Does not implicitly {@link google.cloud.functions.v2.ListRuntimesResponse.Runtime.verify|verify} messages.
                         * @param message Runtime message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.functions.v2.ListRuntimesResponse.IRuntime, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Runtime message, length delimited. Does not implicitly {@link google.cloud.functions.v2.ListRuntimesResponse.Runtime.verify|verify} messages.
                         * @param message Runtime message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.functions.v2.ListRuntimesResponse.IRuntime, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Runtime message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Runtime
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.ListRuntimesResponse.Runtime;

                        /**
                         * Decodes a Runtime message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Runtime
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.ListRuntimesResponse.Runtime;

                        /**
                         * Verifies a Runtime message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Runtime message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Runtime
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.ListRuntimesResponse.Runtime;

                        /**
                         * Creates a plain object from a Runtime message. Also converts values to other types if specified.
                         * @param message Runtime
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.functions.v2.ListRuntimesResponse.Runtime, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Runtime to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** RuntimeStage enum. */
                    enum RuntimeStage {
                        RUNTIME_STAGE_UNSPECIFIED = 0,
                        DEVELOPMENT = 1,
                        ALPHA = 2,
                        BETA = 3,
                        GA = 4,
                        DEPRECATED = 5,
                        DECOMMISSIONED = 6
                    }
                }

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {

                    /** OperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target */
                    target?: (string|null);

                    /** OperationMetadata verb */
                    verb?: (string|null);

                    /** OperationMetadata statusDetail */
                    statusDetail?: (string|null);

                    /** OperationMetadata cancelRequested */
                    cancelRequested?: (boolean|null);

                    /** OperationMetadata apiVersion */
                    apiVersion?: (string|null);

                    /** OperationMetadata requestResource */
                    requestResource?: (google.protobuf.IAny|null);

                    /** OperationMetadata stages */
                    stages?: (google.cloud.functions.v2.IStage[]|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target. */
                    public target: string;

                    /** OperationMetadata verb. */
                    public verb: string;

                    /** OperationMetadata statusDetail. */
                    public statusDetail: string;

                    /** OperationMetadata cancelRequested. */
                    public cancelRequested: boolean;

                    /** OperationMetadata apiVersion. */
                    public apiVersion: string;

                    /** OperationMetadata requestResource. */
                    public requestResource?: (google.protobuf.IAny|null);

                    /** OperationMetadata stages. */
                    public stages: google.cloud.functions.v2.IStage[];

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.functions.v2.IOperationMetadata): google.cloud.functions.v2.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.functions.v2.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.functions.v2.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.OperationMetadata;

                    /**
                     * Verifies an OperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Stage. */
                interface IStage {

                    /** Stage name */
                    name?: (google.cloud.functions.v2.Stage.Name|keyof typeof google.cloud.functions.v2.Stage.Name|null);

                    /** Stage message */
                    message?: (string|null);

                    /** Stage state */
                    state?: (google.cloud.functions.v2.Stage.State|keyof typeof google.cloud.functions.v2.Stage.State|null);

                    /** Stage resource */
                    resource?: (string|null);

                    /** Stage resourceUri */
                    resourceUri?: (string|null);

                    /** Stage stateMessages */
                    stateMessages?: (google.cloud.functions.v2.IStateMessage[]|null);
                }

                /** Represents a Stage. */
                class Stage implements IStage {

                    /**
                     * Constructs a new Stage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2.IStage);

                    /** Stage name. */
                    public name: (google.cloud.functions.v2.Stage.Name|keyof typeof google.cloud.functions.v2.Stage.Name);

                    /** Stage message. */
                    public message: string;

                    /** Stage state. */
                    public state: (google.cloud.functions.v2.Stage.State|keyof typeof google.cloud.functions.v2.Stage.State);

                    /** Stage resource. */
                    public resource: string;

                    /** Stage resourceUri. */
                    public resourceUri: string;

                    /** Stage stateMessages. */
                    public stateMessages: google.cloud.functions.v2.IStateMessage[];

                    /**
                     * Creates a new Stage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Stage instance
                     */
                    public static create(properties?: google.cloud.functions.v2.IStage): google.cloud.functions.v2.Stage;

                    /**
                     * Encodes the specified Stage message. Does not implicitly {@link google.cloud.functions.v2.Stage.verify|verify} messages.
                     * @param message Stage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2.IStage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Stage message, length delimited. Does not implicitly {@link google.cloud.functions.v2.Stage.verify|verify} messages.
                     * @param message Stage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2.IStage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Stage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Stage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2.Stage;

                    /**
                     * Decodes a Stage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Stage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2.Stage;

                    /**
                     * Verifies a Stage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Stage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Stage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2.Stage;

                    /**
                     * Creates a plain object from a Stage message. Also converts values to other types if specified.
                     * @param message Stage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2.Stage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Stage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Stage {

                    /** Name enum. */
                    enum Name {
                        NAME_UNSPECIFIED = 0,
                        ARTIFACT_REGISTRY = 1,
                        BUILD = 2,
                        SERVICE = 3,
                        TRIGGER = 4,
                        SERVICE_ROLLBACK = 5,
                        TRIGGER_ROLLBACK = 6
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        NOT_STARTED = 1,
                        IN_PROGRESS = 2,
                        COMPLETE = 3
                    }
                }
            }

            /** Namespace v2alpha. */
            namespace v2alpha {

                /** Represents a FunctionService */
                class FunctionService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new FunctionService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new FunctionService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): FunctionService;

                    /**
                     * Calls GetFunction.
                     * @param request GetFunctionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Function
                     */
                    public getFunction(request: google.cloud.functions.v2alpha.IGetFunctionRequest, callback: google.cloud.functions.v2alpha.FunctionService.GetFunctionCallback): void;

                    /**
                     * Calls GetFunction.
                     * @param request GetFunctionRequest message or plain object
                     * @returns Promise
                     */
                    public getFunction(request: google.cloud.functions.v2alpha.IGetFunctionRequest): Promise<google.cloud.functions.v2alpha.Function>;

                    /**
                     * Calls ListFunctions.
                     * @param request ListFunctionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFunctionsResponse
                     */
                    public listFunctions(request: google.cloud.functions.v2alpha.IListFunctionsRequest, callback: google.cloud.functions.v2alpha.FunctionService.ListFunctionsCallback): void;

                    /**
                     * Calls ListFunctions.
                     * @param request ListFunctionsRequest message or plain object
                     * @returns Promise
                     */
                    public listFunctions(request: google.cloud.functions.v2alpha.IListFunctionsRequest): Promise<google.cloud.functions.v2alpha.ListFunctionsResponse>;

                    /**
                     * Calls CreateFunction.
                     * @param request CreateFunctionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createFunction(request: google.cloud.functions.v2alpha.ICreateFunctionRequest, callback: google.cloud.functions.v2alpha.FunctionService.CreateFunctionCallback): void;

                    /**
                     * Calls CreateFunction.
                     * @param request CreateFunctionRequest message or plain object
                     * @returns Promise
                     */
                    public createFunction(request: google.cloud.functions.v2alpha.ICreateFunctionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateFunction.
                     * @param request UpdateFunctionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateFunction(request: google.cloud.functions.v2alpha.IUpdateFunctionRequest, callback: google.cloud.functions.v2alpha.FunctionService.UpdateFunctionCallback): void;

                    /**
                     * Calls UpdateFunction.
                     * @param request UpdateFunctionRequest message or plain object
                     * @returns Promise
                     */
                    public updateFunction(request: google.cloud.functions.v2alpha.IUpdateFunctionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteFunction.
                     * @param request DeleteFunctionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteFunction(request: google.cloud.functions.v2alpha.IDeleteFunctionRequest, callback: google.cloud.functions.v2alpha.FunctionService.DeleteFunctionCallback): void;

                    /**
                     * Calls DeleteFunction.
                     * @param request DeleteFunctionRequest message or plain object
                     * @returns Promise
                     */
                    public deleteFunction(request: google.cloud.functions.v2alpha.IDeleteFunctionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GenerateUploadUrl.
                     * @param request GenerateUploadUrlRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateUploadUrlResponse
                     */
                    public generateUploadUrl(request: google.cloud.functions.v2alpha.IGenerateUploadUrlRequest, callback: google.cloud.functions.v2alpha.FunctionService.GenerateUploadUrlCallback): void;

                    /**
                     * Calls GenerateUploadUrl.
                     * @param request GenerateUploadUrlRequest message or plain object
                     * @returns Promise
                     */
                    public generateUploadUrl(request: google.cloud.functions.v2alpha.IGenerateUploadUrlRequest): Promise<google.cloud.functions.v2alpha.GenerateUploadUrlResponse>;

                    /**
                     * Calls GenerateDownloadUrl.
                     * @param request GenerateDownloadUrlRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateDownloadUrlResponse
                     */
                    public generateDownloadUrl(request: google.cloud.functions.v2alpha.IGenerateDownloadUrlRequest, callback: google.cloud.functions.v2alpha.FunctionService.GenerateDownloadUrlCallback): void;

                    /**
                     * Calls GenerateDownloadUrl.
                     * @param request GenerateDownloadUrlRequest message or plain object
                     * @returns Promise
                     */
                    public generateDownloadUrl(request: google.cloud.functions.v2alpha.IGenerateDownloadUrlRequest): Promise<google.cloud.functions.v2alpha.GenerateDownloadUrlResponse>;

                    /**
                     * Calls ListRuntimes.
                     * @param request ListRuntimesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRuntimesResponse
                     */
                    public listRuntimes(request: google.cloud.functions.v2alpha.IListRuntimesRequest, callback: google.cloud.functions.v2alpha.FunctionService.ListRuntimesCallback): void;

                    /**
                     * Calls ListRuntimes.
                     * @param request ListRuntimesRequest message or plain object
                     * @returns Promise
                     */
                    public listRuntimes(request: google.cloud.functions.v2alpha.IListRuntimesRequest): Promise<google.cloud.functions.v2alpha.ListRuntimesResponse>;
                }

                namespace FunctionService {

                    /**
                     * Callback as used by {@link google.cloud.functions.v2alpha.FunctionService#getFunction}.
                     * @param error Error, if any
                     * @param [response] Function
                     */
                    type GetFunctionCallback = (error: (Error|null), response?: google.cloud.functions.v2alpha.Function) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v2alpha.FunctionService#listFunctions}.
                     * @param error Error, if any
                     * @param [response] ListFunctionsResponse
                     */
                    type ListFunctionsCallback = (error: (Error|null), response?: google.cloud.functions.v2alpha.ListFunctionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v2alpha.FunctionService#createFunction}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateFunctionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v2alpha.FunctionService#updateFunction}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateFunctionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v2alpha.FunctionService#deleteFunction}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteFunctionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v2alpha.FunctionService#generateUploadUrl}.
                     * @param error Error, if any
                     * @param [response] GenerateUploadUrlResponse
                     */
                    type GenerateUploadUrlCallback = (error: (Error|null), response?: google.cloud.functions.v2alpha.GenerateUploadUrlResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v2alpha.FunctionService#generateDownloadUrl}.
                     * @param error Error, if any
                     * @param [response] GenerateDownloadUrlResponse
                     */
                    type GenerateDownloadUrlCallback = (error: (Error|null), response?: google.cloud.functions.v2alpha.GenerateDownloadUrlResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v2alpha.FunctionService#listRuntimes}.
                     * @param error Error, if any
                     * @param [response] ListRuntimesResponse
                     */
                    type ListRuntimesCallback = (error: (Error|null), response?: google.cloud.functions.v2alpha.ListRuntimesResponse) => void;
                }

                /** Environment enum. */
                enum Environment {
                    ENVIRONMENT_UNSPECIFIED = 0,
                    GEN_1 = 1,
                    GEN_2 = 2
                }

                /** Properties of a Function. */
                interface IFunction {

                    /** Function name */
                    name?: (string|null);

                    /** Function environment */
                    environment?: (google.cloud.functions.v2alpha.Environment|keyof typeof google.cloud.functions.v2alpha.Environment|null);

                    /** Function description */
                    description?: (string|null);

                    /** Function buildConfig */
                    buildConfig?: (google.cloud.functions.v2alpha.IBuildConfig|null);

                    /** Function serviceConfig */
                    serviceConfig?: (google.cloud.functions.v2alpha.IServiceConfig|null);

                    /** Function eventTrigger */
                    eventTrigger?: (google.cloud.functions.v2alpha.IEventTrigger|null);

                    /** Function state */
                    state?: (google.cloud.functions.v2alpha.Function.State|keyof typeof google.cloud.functions.v2alpha.Function.State|null);

                    /** Function updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Function labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Function stateMessages */
                    stateMessages?: (google.cloud.functions.v2alpha.IStateMessage[]|null);
                }

                /** Represents a Function. */
                class Function implements IFunction {

                    /**
                     * Constructs a new Function.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.IFunction);

                    /** Function name. */
                    public name: string;

                    /** Function environment. */
                    public environment: (google.cloud.functions.v2alpha.Environment|keyof typeof google.cloud.functions.v2alpha.Environment);

                    /** Function description. */
                    public description: string;

                    /** Function buildConfig. */
                    public buildConfig?: (google.cloud.functions.v2alpha.IBuildConfig|null);

                    /** Function serviceConfig. */
                    public serviceConfig?: (google.cloud.functions.v2alpha.IServiceConfig|null);

                    /** Function eventTrigger. */
                    public eventTrigger?: (google.cloud.functions.v2alpha.IEventTrigger|null);

                    /** Function state. */
                    public state: (google.cloud.functions.v2alpha.Function.State|keyof typeof google.cloud.functions.v2alpha.Function.State);

                    /** Function updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Function labels. */
                    public labels: { [k: string]: string };

                    /** Function stateMessages. */
                    public stateMessages: google.cloud.functions.v2alpha.IStateMessage[];

                    /**
                     * Creates a new Function instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Function instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.IFunction): google.cloud.functions.v2alpha.Function;

                    /**
                     * Encodes the specified Function message. Does not implicitly {@link google.cloud.functions.v2alpha.Function.verify|verify} messages.
                     * @param message Function message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.IFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Function message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.Function.verify|verify} messages.
                     * @param message Function message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.IFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Function message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Function
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.Function;

                    /**
                     * Decodes a Function message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Function
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.Function;

                    /**
                     * Verifies a Function message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Function message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Function
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.Function;

                    /**
                     * Creates a plain object from a Function message. Also converts values to other types if specified.
                     * @param message Function
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.Function, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Function to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Function {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        FAILED = 2,
                        DEPLOYING = 3,
                        DELETING = 4,
                        UNKNOWN = 5
                    }
                }

                /** Properties of a StateMessage. */
                interface IStateMessage {

                    /** StateMessage severity */
                    severity?: (google.cloud.functions.v2alpha.StateMessage.Severity|keyof typeof google.cloud.functions.v2alpha.StateMessage.Severity|null);

                    /** StateMessage type */
                    type?: (string|null);

                    /** StateMessage message */
                    message?: (string|null);
                }

                /** Represents a StateMessage. */
                class StateMessage implements IStateMessage {

                    /**
                     * Constructs a new StateMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.IStateMessage);

                    /** StateMessage severity. */
                    public severity: (google.cloud.functions.v2alpha.StateMessage.Severity|keyof typeof google.cloud.functions.v2alpha.StateMessage.Severity);

                    /** StateMessage type. */
                    public type: string;

                    /** StateMessage message. */
                    public message: string;

                    /**
                     * Creates a new StateMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StateMessage instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.IStateMessage): google.cloud.functions.v2alpha.StateMessage;

                    /**
                     * Encodes the specified StateMessage message. Does not implicitly {@link google.cloud.functions.v2alpha.StateMessage.verify|verify} messages.
                     * @param message StateMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.IStateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StateMessage message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.StateMessage.verify|verify} messages.
                     * @param message StateMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.IStateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StateMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StateMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.StateMessage;

                    /**
                     * Decodes a StateMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StateMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.StateMessage;

                    /**
                     * Verifies a StateMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StateMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StateMessage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.StateMessage;

                    /**
                     * Creates a plain object from a StateMessage message. Also converts values to other types if specified.
                     * @param message StateMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.StateMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StateMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace StateMessage {

                    /** Severity enum. */
                    enum Severity {
                        SEVERITY_UNSPECIFIED = 0,
                        ERROR = 1,
                        WARNING = 2,
                        INFO = 3
                    }
                }

                /** Properties of a StorageSource. */
                interface IStorageSource {

                    /** StorageSource bucket */
                    bucket?: (string|null);

                    /** StorageSource object */
                    object?: (string|null);

                    /** StorageSource generation */
                    generation?: (number|Long|string|null);
                }

                /** Represents a StorageSource. */
                class StorageSource implements IStorageSource {

                    /**
                     * Constructs a new StorageSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.IStorageSource);

                    /** StorageSource bucket. */
                    public bucket: string;

                    /** StorageSource object. */
                    public object: string;

                    /** StorageSource generation. */
                    public generation: (number|Long|string);

                    /**
                     * Creates a new StorageSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StorageSource instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.IStorageSource): google.cloud.functions.v2alpha.StorageSource;

                    /**
                     * Encodes the specified StorageSource message. Does not implicitly {@link google.cloud.functions.v2alpha.StorageSource.verify|verify} messages.
                     * @param message StorageSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.IStorageSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StorageSource message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.StorageSource.verify|verify} messages.
                     * @param message StorageSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.IStorageSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StorageSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StorageSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.StorageSource;

                    /**
                     * Decodes a StorageSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StorageSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.StorageSource;

                    /**
                     * Verifies a StorageSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StorageSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StorageSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.StorageSource;

                    /**
                     * Creates a plain object from a StorageSource message. Also converts values to other types if specified.
                     * @param message StorageSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.StorageSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StorageSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RepoSource. */
                interface IRepoSource {

                    /** RepoSource branchName */
                    branchName?: (string|null);

                    /** RepoSource tagName */
                    tagName?: (string|null);

                    /** RepoSource commitSha */
                    commitSha?: (string|null);

                    /** RepoSource projectId */
                    projectId?: (string|null);

                    /** RepoSource repoName */
                    repoName?: (string|null);

                    /** RepoSource dir */
                    dir?: (string|null);

                    /** RepoSource invertRegex */
                    invertRegex?: (boolean|null);
                }

                /** Represents a RepoSource. */
                class RepoSource implements IRepoSource {

                    /**
                     * Constructs a new RepoSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.IRepoSource);

                    /** RepoSource branchName. */
                    public branchName?: (string|null);

                    /** RepoSource tagName. */
                    public tagName?: (string|null);

                    /** RepoSource commitSha. */
                    public commitSha?: (string|null);

                    /** RepoSource projectId. */
                    public projectId: string;

                    /** RepoSource repoName. */
                    public repoName: string;

                    /** RepoSource dir. */
                    public dir: string;

                    /** RepoSource invertRegex. */
                    public invertRegex: boolean;

                    /** RepoSource revision. */
                    public revision?: ("branchName"|"tagName"|"commitSha");

                    /**
                     * Creates a new RepoSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RepoSource instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.IRepoSource): google.cloud.functions.v2alpha.RepoSource;

                    /**
                     * Encodes the specified RepoSource message. Does not implicitly {@link google.cloud.functions.v2alpha.RepoSource.verify|verify} messages.
                     * @param message RepoSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.IRepoSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RepoSource message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.RepoSource.verify|verify} messages.
                     * @param message RepoSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.IRepoSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RepoSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RepoSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.RepoSource;

                    /**
                     * Decodes a RepoSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RepoSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.RepoSource;

                    /**
                     * Verifies a RepoSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RepoSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RepoSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.RepoSource;

                    /**
                     * Creates a plain object from a RepoSource message. Also converts values to other types if specified.
                     * @param message RepoSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.RepoSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RepoSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Source. */
                interface ISource {

                    /** Source storageSource */
                    storageSource?: (google.cloud.functions.v2alpha.IStorageSource|null);

                    /** Source repoSource */
                    repoSource?: (google.cloud.functions.v2alpha.IRepoSource|null);
                }

                /** Represents a Source. */
                class Source implements ISource {

                    /**
                     * Constructs a new Source.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.ISource);

                    /** Source storageSource. */
                    public storageSource?: (google.cloud.functions.v2alpha.IStorageSource|null);

                    /** Source repoSource. */
                    public repoSource?: (google.cloud.functions.v2alpha.IRepoSource|null);

                    /** Source source. */
                    public source?: ("storageSource"|"repoSource");

                    /**
                     * Creates a new Source instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Source instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.ISource): google.cloud.functions.v2alpha.Source;

                    /**
                     * Encodes the specified Source message. Does not implicitly {@link google.cloud.functions.v2alpha.Source.verify|verify} messages.
                     * @param message Source message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Source message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.Source.verify|verify} messages.
                     * @param message Source message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Source message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Source
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.Source;

                    /**
                     * Decodes a Source message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Source
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.Source;

                    /**
                     * Verifies a Source message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Source message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Source
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.Source;

                    /**
                     * Creates a plain object from a Source message. Also converts values to other types if specified.
                     * @param message Source
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.Source, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Source to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SourceProvenance. */
                interface ISourceProvenance {

                    /** SourceProvenance resolvedStorageSource */
                    resolvedStorageSource?: (google.cloud.functions.v2alpha.IStorageSource|null);

                    /** SourceProvenance resolvedRepoSource */
                    resolvedRepoSource?: (google.cloud.functions.v2alpha.IRepoSource|null);
                }

                /** Represents a SourceProvenance. */
                class SourceProvenance implements ISourceProvenance {

                    /**
                     * Constructs a new SourceProvenance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.ISourceProvenance);

                    /** SourceProvenance resolvedStorageSource. */
                    public resolvedStorageSource?: (google.cloud.functions.v2alpha.IStorageSource|null);

                    /** SourceProvenance resolvedRepoSource. */
                    public resolvedRepoSource?: (google.cloud.functions.v2alpha.IRepoSource|null);

                    /**
                     * Creates a new SourceProvenance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SourceProvenance instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.ISourceProvenance): google.cloud.functions.v2alpha.SourceProvenance;

                    /**
                     * Encodes the specified SourceProvenance message. Does not implicitly {@link google.cloud.functions.v2alpha.SourceProvenance.verify|verify} messages.
                     * @param message SourceProvenance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.ISourceProvenance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SourceProvenance message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.SourceProvenance.verify|verify} messages.
                     * @param message SourceProvenance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.ISourceProvenance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SourceProvenance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SourceProvenance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.SourceProvenance;

                    /**
                     * Decodes a SourceProvenance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SourceProvenance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.SourceProvenance;

                    /**
                     * Verifies a SourceProvenance message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SourceProvenance message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SourceProvenance
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.SourceProvenance;

                    /**
                     * Creates a plain object from a SourceProvenance message. Also converts values to other types if specified.
                     * @param message SourceProvenance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.SourceProvenance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SourceProvenance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BuildConfig. */
                interface IBuildConfig {

                    /** BuildConfig build */
                    build?: (string|null);

                    /** BuildConfig runtime */
                    runtime?: (string|null);

                    /** BuildConfig entryPoint */
                    entryPoint?: (string|null);

                    /** BuildConfig source */
                    source?: (google.cloud.functions.v2alpha.ISource|null);

                    /** BuildConfig sourceProvenance */
                    sourceProvenance?: (google.cloud.functions.v2alpha.ISourceProvenance|null);

                    /** BuildConfig workerPool */
                    workerPool?: (string|null);

                    /** BuildConfig environmentVariables */
                    environmentVariables?: ({ [k: string]: string }|null);

                    /** BuildConfig dockerRepository */
                    dockerRepository?: (string|null);
                }

                /** Represents a BuildConfig. */
                class BuildConfig implements IBuildConfig {

                    /**
                     * Constructs a new BuildConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.IBuildConfig);

                    /** BuildConfig build. */
                    public build: string;

                    /** BuildConfig runtime. */
                    public runtime: string;

                    /** BuildConfig entryPoint. */
                    public entryPoint: string;

                    /** BuildConfig source. */
                    public source?: (google.cloud.functions.v2alpha.ISource|null);

                    /** BuildConfig sourceProvenance. */
                    public sourceProvenance?: (google.cloud.functions.v2alpha.ISourceProvenance|null);

                    /** BuildConfig workerPool. */
                    public workerPool: string;

                    /** BuildConfig environmentVariables. */
                    public environmentVariables: { [k: string]: string };

                    /** BuildConfig dockerRepository. */
                    public dockerRepository: string;

                    /**
                     * Creates a new BuildConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BuildConfig instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.IBuildConfig): google.cloud.functions.v2alpha.BuildConfig;

                    /**
                     * Encodes the specified BuildConfig message. Does not implicitly {@link google.cloud.functions.v2alpha.BuildConfig.verify|verify} messages.
                     * @param message BuildConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.IBuildConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BuildConfig message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.BuildConfig.verify|verify} messages.
                     * @param message BuildConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.IBuildConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BuildConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BuildConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.BuildConfig;

                    /**
                     * Decodes a BuildConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BuildConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.BuildConfig;

                    /**
                     * Verifies a BuildConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BuildConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BuildConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.BuildConfig;

                    /**
                     * Creates a plain object from a BuildConfig message. Also converts values to other types if specified.
                     * @param message BuildConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.BuildConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BuildConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ServiceConfig. */
                interface IServiceConfig {

                    /** ServiceConfig service */
                    service?: (string|null);

                    /** ServiceConfig timeoutSeconds */
                    timeoutSeconds?: (number|null);

                    /** ServiceConfig availableMemory */
                    availableMemory?: (string|null);

                    /** ServiceConfig environmentVariables */
                    environmentVariables?: ({ [k: string]: string }|null);

                    /** ServiceConfig maxInstanceCount */
                    maxInstanceCount?: (number|null);

                    /** ServiceConfig minInstanceCount */
                    minInstanceCount?: (number|null);

                    /** ServiceConfig vpcConnector */
                    vpcConnector?: (string|null);

                    /** ServiceConfig vpcConnectorEgressSettings */
                    vpcConnectorEgressSettings?: (google.cloud.functions.v2alpha.ServiceConfig.VpcConnectorEgressSettings|keyof typeof google.cloud.functions.v2alpha.ServiceConfig.VpcConnectorEgressSettings|null);

                    /** ServiceConfig ingressSettings */
                    ingressSettings?: (google.cloud.functions.v2alpha.ServiceConfig.IngressSettings|keyof typeof google.cloud.functions.v2alpha.ServiceConfig.IngressSettings|null);

                    /** ServiceConfig uri */
                    uri?: (string|null);

                    /** ServiceConfig serviceAccountEmail */
                    serviceAccountEmail?: (string|null);

                    /** ServiceConfig allTrafficOnLatestRevision */
                    allTrafficOnLatestRevision?: (boolean|null);

                    /** ServiceConfig secretEnvironmentVariables */
                    secretEnvironmentVariables?: (google.cloud.functions.v2alpha.ISecretEnvVar[]|null);

                    /** ServiceConfig secretVolumes */
                    secretVolumes?: (google.cloud.functions.v2alpha.ISecretVolume[]|null);

                    /** ServiceConfig revision */
                    revision?: (string|null);
                }

                /** Represents a ServiceConfig. */
                class ServiceConfig implements IServiceConfig {

                    /**
                     * Constructs a new ServiceConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.IServiceConfig);

                    /** ServiceConfig service. */
                    public service: string;

                    /** ServiceConfig timeoutSeconds. */
                    public timeoutSeconds: number;

                    /** ServiceConfig availableMemory. */
                    public availableMemory: string;

                    /** ServiceConfig environmentVariables. */
                    public environmentVariables: { [k: string]: string };

                    /** ServiceConfig maxInstanceCount. */
                    public maxInstanceCount: number;

                    /** ServiceConfig minInstanceCount. */
                    public minInstanceCount: number;

                    /** ServiceConfig vpcConnector. */
                    public vpcConnector: string;

                    /** ServiceConfig vpcConnectorEgressSettings. */
                    public vpcConnectorEgressSettings: (google.cloud.functions.v2alpha.ServiceConfig.VpcConnectorEgressSettings|keyof typeof google.cloud.functions.v2alpha.ServiceConfig.VpcConnectorEgressSettings);

                    /** ServiceConfig ingressSettings. */
                    public ingressSettings: (google.cloud.functions.v2alpha.ServiceConfig.IngressSettings|keyof typeof google.cloud.functions.v2alpha.ServiceConfig.IngressSettings);

                    /** ServiceConfig uri. */
                    public uri: string;

                    /** ServiceConfig serviceAccountEmail. */
                    public serviceAccountEmail: string;

                    /** ServiceConfig allTrafficOnLatestRevision. */
                    public allTrafficOnLatestRevision: boolean;

                    /** ServiceConfig secretEnvironmentVariables. */
                    public secretEnvironmentVariables: google.cloud.functions.v2alpha.ISecretEnvVar[];

                    /** ServiceConfig secretVolumes. */
                    public secretVolumes: google.cloud.functions.v2alpha.ISecretVolume[];

                    /** ServiceConfig revision. */
                    public revision: string;

                    /**
                     * Creates a new ServiceConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServiceConfig instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.IServiceConfig): google.cloud.functions.v2alpha.ServiceConfig;

                    /**
                     * Encodes the specified ServiceConfig message. Does not implicitly {@link google.cloud.functions.v2alpha.ServiceConfig.verify|verify} messages.
                     * @param message ServiceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.IServiceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServiceConfig message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.ServiceConfig.verify|verify} messages.
                     * @param message ServiceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.IServiceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServiceConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServiceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.ServiceConfig;

                    /**
                     * Decodes a ServiceConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServiceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.ServiceConfig;

                    /**
                     * Verifies a ServiceConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServiceConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServiceConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.ServiceConfig;

                    /**
                     * Creates a plain object from a ServiceConfig message. Also converts values to other types if specified.
                     * @param message ServiceConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.ServiceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServiceConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ServiceConfig {

                    /** VpcConnectorEgressSettings enum. */
                    enum VpcConnectorEgressSettings {
                        VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED = 0,
                        PRIVATE_RANGES_ONLY = 1,
                        ALL_TRAFFIC = 2
                    }

                    /** IngressSettings enum. */
                    enum IngressSettings {
                        INGRESS_SETTINGS_UNSPECIFIED = 0,
                        ALLOW_ALL = 1,
                        ALLOW_INTERNAL_ONLY = 2,
                        ALLOW_INTERNAL_AND_GCLB = 3
                    }
                }

                /** Properties of a SecretEnvVar. */
                interface ISecretEnvVar {

                    /** SecretEnvVar key */
                    key?: (string|null);

                    /** SecretEnvVar projectId */
                    projectId?: (string|null);

                    /** SecretEnvVar secret */
                    secret?: (string|null);

                    /** SecretEnvVar version */
                    version?: (string|null);
                }

                /** Represents a SecretEnvVar. */
                class SecretEnvVar implements ISecretEnvVar {

                    /**
                     * Constructs a new SecretEnvVar.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.ISecretEnvVar);

                    /** SecretEnvVar key. */
                    public key: string;

                    /** SecretEnvVar projectId. */
                    public projectId: string;

                    /** SecretEnvVar secret. */
                    public secret: string;

                    /** SecretEnvVar version. */
                    public version: string;

                    /**
                     * Creates a new SecretEnvVar instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SecretEnvVar instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.ISecretEnvVar): google.cloud.functions.v2alpha.SecretEnvVar;

                    /**
                     * Encodes the specified SecretEnvVar message. Does not implicitly {@link google.cloud.functions.v2alpha.SecretEnvVar.verify|verify} messages.
                     * @param message SecretEnvVar message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.ISecretEnvVar, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SecretEnvVar message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.SecretEnvVar.verify|verify} messages.
                     * @param message SecretEnvVar message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.ISecretEnvVar, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SecretEnvVar message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SecretEnvVar
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.SecretEnvVar;

                    /**
                     * Decodes a SecretEnvVar message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SecretEnvVar
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.SecretEnvVar;

                    /**
                     * Verifies a SecretEnvVar message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SecretEnvVar message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SecretEnvVar
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.SecretEnvVar;

                    /**
                     * Creates a plain object from a SecretEnvVar message. Also converts values to other types if specified.
                     * @param message SecretEnvVar
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.SecretEnvVar, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SecretEnvVar to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SecretVolume. */
                interface ISecretVolume {

                    /** SecretVolume mountPath */
                    mountPath?: (string|null);

                    /** SecretVolume projectId */
                    projectId?: (string|null);

                    /** SecretVolume secret */
                    secret?: (string|null);

                    /** SecretVolume versions */
                    versions?: (google.cloud.functions.v2alpha.SecretVolume.ISecretVersion[]|null);
                }

                /** Represents a SecretVolume. */
                class SecretVolume implements ISecretVolume {

                    /**
                     * Constructs a new SecretVolume.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.ISecretVolume);

                    /** SecretVolume mountPath. */
                    public mountPath: string;

                    /** SecretVolume projectId. */
                    public projectId: string;

                    /** SecretVolume secret. */
                    public secret: string;

                    /** SecretVolume versions. */
                    public versions: google.cloud.functions.v2alpha.SecretVolume.ISecretVersion[];

                    /**
                     * Creates a new SecretVolume instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SecretVolume instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.ISecretVolume): google.cloud.functions.v2alpha.SecretVolume;

                    /**
                     * Encodes the specified SecretVolume message. Does not implicitly {@link google.cloud.functions.v2alpha.SecretVolume.verify|verify} messages.
                     * @param message SecretVolume message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.ISecretVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SecretVolume message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.SecretVolume.verify|verify} messages.
                     * @param message SecretVolume message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.ISecretVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SecretVolume message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SecretVolume
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.SecretVolume;

                    /**
                     * Decodes a SecretVolume message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SecretVolume
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.SecretVolume;

                    /**
                     * Verifies a SecretVolume message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SecretVolume message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SecretVolume
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.SecretVolume;

                    /**
                     * Creates a plain object from a SecretVolume message. Also converts values to other types if specified.
                     * @param message SecretVolume
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.SecretVolume, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SecretVolume to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SecretVolume {

                    /** Properties of a SecretVersion. */
                    interface ISecretVersion {

                        /** SecretVersion version */
                        version?: (string|null);

                        /** SecretVersion path */
                        path?: (string|null);
                    }

                    /** Represents a SecretVersion. */
                    class SecretVersion implements ISecretVersion {

                        /**
                         * Constructs a new SecretVersion.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.functions.v2alpha.SecretVolume.ISecretVersion);

                        /** SecretVersion version. */
                        public version: string;

                        /** SecretVersion path. */
                        public path: string;

                        /**
                         * Creates a new SecretVersion instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SecretVersion instance
                         */
                        public static create(properties?: google.cloud.functions.v2alpha.SecretVolume.ISecretVersion): google.cloud.functions.v2alpha.SecretVolume.SecretVersion;

                        /**
                         * Encodes the specified SecretVersion message. Does not implicitly {@link google.cloud.functions.v2alpha.SecretVolume.SecretVersion.verify|verify} messages.
                         * @param message SecretVersion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.functions.v2alpha.SecretVolume.ISecretVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SecretVersion message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.SecretVolume.SecretVersion.verify|verify} messages.
                         * @param message SecretVersion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.functions.v2alpha.SecretVolume.ISecretVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SecretVersion message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SecretVersion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.SecretVolume.SecretVersion;

                        /**
                         * Decodes a SecretVersion message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SecretVersion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.SecretVolume.SecretVersion;

                        /**
                         * Verifies a SecretVersion message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SecretVersion message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SecretVersion
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.SecretVolume.SecretVersion;

                        /**
                         * Creates a plain object from a SecretVersion message. Also converts values to other types if specified.
                         * @param message SecretVersion
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.functions.v2alpha.SecretVolume.SecretVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SecretVersion to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of an EventTrigger. */
                interface IEventTrigger {

                    /** EventTrigger trigger */
                    trigger?: (string|null);

                    /** EventTrigger triggerRegion */
                    triggerRegion?: (string|null);

                    /** EventTrigger eventType */
                    eventType?: (string|null);

                    /** EventTrigger eventFilters */
                    eventFilters?: (google.cloud.functions.v2alpha.IEventFilter[]|null);

                    /** EventTrigger pubsubTopic */
                    pubsubTopic?: (string|null);

                    /** EventTrigger serviceAccountEmail */
                    serviceAccountEmail?: (string|null);

                    /** EventTrigger retryPolicy */
                    retryPolicy?: (google.cloud.functions.v2alpha.EventTrigger.RetryPolicy|keyof typeof google.cloud.functions.v2alpha.EventTrigger.RetryPolicy|null);

                    /** EventTrigger channel */
                    channel?: (string|null);
                }

                /** Represents an EventTrigger. */
                class EventTrigger implements IEventTrigger {

                    /**
                     * Constructs a new EventTrigger.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.IEventTrigger);

                    /** EventTrigger trigger. */
                    public trigger: string;

                    /** EventTrigger triggerRegion. */
                    public triggerRegion: string;

                    /** EventTrigger eventType. */
                    public eventType: string;

                    /** EventTrigger eventFilters. */
                    public eventFilters: google.cloud.functions.v2alpha.IEventFilter[];

                    /** EventTrigger pubsubTopic. */
                    public pubsubTopic: string;

                    /** EventTrigger serviceAccountEmail. */
                    public serviceAccountEmail: string;

                    /** EventTrigger retryPolicy. */
                    public retryPolicy: (google.cloud.functions.v2alpha.EventTrigger.RetryPolicy|keyof typeof google.cloud.functions.v2alpha.EventTrigger.RetryPolicy);

                    /** EventTrigger channel. */
                    public channel: string;

                    /**
                     * Creates a new EventTrigger instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EventTrigger instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.IEventTrigger): google.cloud.functions.v2alpha.EventTrigger;

                    /**
                     * Encodes the specified EventTrigger message. Does not implicitly {@link google.cloud.functions.v2alpha.EventTrigger.verify|verify} messages.
                     * @param message EventTrigger message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.IEventTrigger, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EventTrigger message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.EventTrigger.verify|verify} messages.
                     * @param message EventTrigger message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.IEventTrigger, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EventTrigger message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EventTrigger
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.EventTrigger;

                    /**
                     * Decodes an EventTrigger message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EventTrigger
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.EventTrigger;

                    /**
                     * Verifies an EventTrigger message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EventTrigger message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EventTrigger
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.EventTrigger;

                    /**
                     * Creates a plain object from an EventTrigger message. Also converts values to other types if specified.
                     * @param message EventTrigger
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.EventTrigger, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EventTrigger to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace EventTrigger {

                    /** RetryPolicy enum. */
                    enum RetryPolicy {
                        RETRY_POLICY_UNSPECIFIED = 0,
                        RETRY_POLICY_DO_NOT_RETRY = 1,
                        RETRY_POLICY_RETRY = 2
                    }
                }

                /** Properties of an EventFilter. */
                interface IEventFilter {

                    /** EventFilter attribute */
                    attribute?: (string|null);

                    /** EventFilter value */
                    value?: (string|null);

                    /** EventFilter operator */
                    operator?: (string|null);
                }

                /** Represents an EventFilter. */
                class EventFilter implements IEventFilter {

                    /**
                     * Constructs a new EventFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.IEventFilter);

                    /** EventFilter attribute. */
                    public attribute: string;

                    /** EventFilter value. */
                    public value: string;

                    /** EventFilter operator. */
                    public operator: string;

                    /**
                     * Creates a new EventFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EventFilter instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.IEventFilter): google.cloud.functions.v2alpha.EventFilter;

                    /**
                     * Encodes the specified EventFilter message. Does not implicitly {@link google.cloud.functions.v2alpha.EventFilter.verify|verify} messages.
                     * @param message EventFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.IEventFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EventFilter message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.EventFilter.verify|verify} messages.
                     * @param message EventFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.IEventFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EventFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EventFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.EventFilter;

                    /**
                     * Decodes an EventFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EventFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.EventFilter;

                    /**
                     * Verifies an EventFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EventFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EventFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.EventFilter;

                    /**
                     * Creates a plain object from an EventFilter message. Also converts values to other types if specified.
                     * @param message EventFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.EventFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EventFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetFunctionRequest. */
                interface IGetFunctionRequest {

                    /** GetFunctionRequest name */
                    name?: (string|null);
                }

                /** Represents a GetFunctionRequest. */
                class GetFunctionRequest implements IGetFunctionRequest {

                    /**
                     * Constructs a new GetFunctionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.IGetFunctionRequest);

                    /** GetFunctionRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetFunctionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetFunctionRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.IGetFunctionRequest): google.cloud.functions.v2alpha.GetFunctionRequest;

                    /**
                     * Encodes the specified GetFunctionRequest message. Does not implicitly {@link google.cloud.functions.v2alpha.GetFunctionRequest.verify|verify} messages.
                     * @param message GetFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.IGetFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetFunctionRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.GetFunctionRequest.verify|verify} messages.
                     * @param message GetFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.IGetFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetFunctionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.GetFunctionRequest;

                    /**
                     * Decodes a GetFunctionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.GetFunctionRequest;

                    /**
                     * Verifies a GetFunctionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetFunctionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetFunctionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.GetFunctionRequest;

                    /**
                     * Creates a plain object from a GetFunctionRequest message. Also converts values to other types if specified.
                     * @param message GetFunctionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.GetFunctionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetFunctionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFunctionsRequest. */
                interface IListFunctionsRequest {

                    /** ListFunctionsRequest parent */
                    parent?: (string|null);

                    /** ListFunctionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListFunctionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListFunctionsRequest filter */
                    filter?: (string|null);

                    /** ListFunctionsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListFunctionsRequest. */
                class ListFunctionsRequest implements IListFunctionsRequest {

                    /**
                     * Constructs a new ListFunctionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.IListFunctionsRequest);

                    /** ListFunctionsRequest parent. */
                    public parent: string;

                    /** ListFunctionsRequest pageSize. */
                    public pageSize: number;

                    /** ListFunctionsRequest pageToken. */
                    public pageToken: string;

                    /** ListFunctionsRequest filter. */
                    public filter: string;

                    /** ListFunctionsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListFunctionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFunctionsRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.IListFunctionsRequest): google.cloud.functions.v2alpha.ListFunctionsRequest;

                    /**
                     * Encodes the specified ListFunctionsRequest message. Does not implicitly {@link google.cloud.functions.v2alpha.ListFunctionsRequest.verify|verify} messages.
                     * @param message ListFunctionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.IListFunctionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFunctionsRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.ListFunctionsRequest.verify|verify} messages.
                     * @param message ListFunctionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.IListFunctionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFunctionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFunctionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.ListFunctionsRequest;

                    /**
                     * Decodes a ListFunctionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFunctionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.ListFunctionsRequest;

                    /**
                     * Verifies a ListFunctionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFunctionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFunctionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.ListFunctionsRequest;

                    /**
                     * Creates a plain object from a ListFunctionsRequest message. Also converts values to other types if specified.
                     * @param message ListFunctionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.ListFunctionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFunctionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFunctionsResponse. */
                interface IListFunctionsResponse {

                    /** ListFunctionsResponse functions */
                    functions?: (google.cloud.functions.v2alpha.IFunction[]|null);

                    /** ListFunctionsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListFunctionsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListFunctionsResponse. */
                class ListFunctionsResponse implements IListFunctionsResponse {

                    /**
                     * Constructs a new ListFunctionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.IListFunctionsResponse);

                    /** ListFunctionsResponse functions. */
                    public functions: google.cloud.functions.v2alpha.IFunction[];

                    /** ListFunctionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListFunctionsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListFunctionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFunctionsResponse instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.IListFunctionsResponse): google.cloud.functions.v2alpha.ListFunctionsResponse;

                    /**
                     * Encodes the specified ListFunctionsResponse message. Does not implicitly {@link google.cloud.functions.v2alpha.ListFunctionsResponse.verify|verify} messages.
                     * @param message ListFunctionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.IListFunctionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFunctionsResponse message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.ListFunctionsResponse.verify|verify} messages.
                     * @param message ListFunctionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.IListFunctionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFunctionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFunctionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.ListFunctionsResponse;

                    /**
                     * Decodes a ListFunctionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFunctionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.ListFunctionsResponse;

                    /**
                     * Verifies a ListFunctionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFunctionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFunctionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.ListFunctionsResponse;

                    /**
                     * Creates a plain object from a ListFunctionsResponse message. Also converts values to other types if specified.
                     * @param message ListFunctionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.ListFunctionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFunctionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateFunctionRequest. */
                interface ICreateFunctionRequest {

                    /** CreateFunctionRequest parent */
                    parent?: (string|null);

                    /** CreateFunctionRequest function */
                    "function"?: (google.cloud.functions.v2alpha.IFunction|null);

                    /** CreateFunctionRequest functionId */
                    functionId?: (string|null);
                }

                /** Represents a CreateFunctionRequest. */
                class CreateFunctionRequest implements ICreateFunctionRequest {

                    /**
                     * Constructs a new CreateFunctionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.ICreateFunctionRequest);

                    /** CreateFunctionRequest parent. */
                    public parent: string;

                    /** CreateFunctionRequest function. */
                    public function?: (google.cloud.functions.v2alpha.IFunction|null);

                    /** CreateFunctionRequest functionId. */
                    public functionId: string;

                    /**
                     * Creates a new CreateFunctionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateFunctionRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.ICreateFunctionRequest): google.cloud.functions.v2alpha.CreateFunctionRequest;

                    /**
                     * Encodes the specified CreateFunctionRequest message. Does not implicitly {@link google.cloud.functions.v2alpha.CreateFunctionRequest.verify|verify} messages.
                     * @param message CreateFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.ICreateFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateFunctionRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.CreateFunctionRequest.verify|verify} messages.
                     * @param message CreateFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.ICreateFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateFunctionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.CreateFunctionRequest;

                    /**
                     * Decodes a CreateFunctionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.CreateFunctionRequest;

                    /**
                     * Verifies a CreateFunctionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateFunctionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateFunctionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.CreateFunctionRequest;

                    /**
                     * Creates a plain object from a CreateFunctionRequest message. Also converts values to other types if specified.
                     * @param message CreateFunctionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.CreateFunctionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateFunctionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateFunctionRequest. */
                interface IUpdateFunctionRequest {

                    /** UpdateFunctionRequest function */
                    "function"?: (google.cloud.functions.v2alpha.IFunction|null);

                    /** UpdateFunctionRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateFunctionRequest. */
                class UpdateFunctionRequest implements IUpdateFunctionRequest {

                    /**
                     * Constructs a new UpdateFunctionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.IUpdateFunctionRequest);

                    /** UpdateFunctionRequest function. */
                    public function?: (google.cloud.functions.v2alpha.IFunction|null);

                    /** UpdateFunctionRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateFunctionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateFunctionRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.IUpdateFunctionRequest): google.cloud.functions.v2alpha.UpdateFunctionRequest;

                    /**
                     * Encodes the specified UpdateFunctionRequest message. Does not implicitly {@link google.cloud.functions.v2alpha.UpdateFunctionRequest.verify|verify} messages.
                     * @param message UpdateFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.IUpdateFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateFunctionRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.UpdateFunctionRequest.verify|verify} messages.
                     * @param message UpdateFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.IUpdateFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateFunctionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.UpdateFunctionRequest;

                    /**
                     * Decodes an UpdateFunctionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.UpdateFunctionRequest;

                    /**
                     * Verifies an UpdateFunctionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateFunctionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateFunctionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.UpdateFunctionRequest;

                    /**
                     * Creates a plain object from an UpdateFunctionRequest message. Also converts values to other types if specified.
                     * @param message UpdateFunctionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.UpdateFunctionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateFunctionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteFunctionRequest. */
                interface IDeleteFunctionRequest {

                    /** DeleteFunctionRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteFunctionRequest. */
                class DeleteFunctionRequest implements IDeleteFunctionRequest {

                    /**
                     * Constructs a new DeleteFunctionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.IDeleteFunctionRequest);

                    /** DeleteFunctionRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteFunctionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteFunctionRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.IDeleteFunctionRequest): google.cloud.functions.v2alpha.DeleteFunctionRequest;

                    /**
                     * Encodes the specified DeleteFunctionRequest message. Does not implicitly {@link google.cloud.functions.v2alpha.DeleteFunctionRequest.verify|verify} messages.
                     * @param message DeleteFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.IDeleteFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteFunctionRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.DeleteFunctionRequest.verify|verify} messages.
                     * @param message DeleteFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.IDeleteFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteFunctionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.DeleteFunctionRequest;

                    /**
                     * Decodes a DeleteFunctionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.DeleteFunctionRequest;

                    /**
                     * Verifies a DeleteFunctionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteFunctionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteFunctionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.DeleteFunctionRequest;

                    /**
                     * Creates a plain object from a DeleteFunctionRequest message. Also converts values to other types if specified.
                     * @param message DeleteFunctionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.DeleteFunctionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteFunctionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GenerateUploadUrlRequest. */
                interface IGenerateUploadUrlRequest {

                    /** GenerateUploadUrlRequest parent */
                    parent?: (string|null);
                }

                /** Represents a GenerateUploadUrlRequest. */
                class GenerateUploadUrlRequest implements IGenerateUploadUrlRequest {

                    /**
                     * Constructs a new GenerateUploadUrlRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.IGenerateUploadUrlRequest);

                    /** GenerateUploadUrlRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new GenerateUploadUrlRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateUploadUrlRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.IGenerateUploadUrlRequest): google.cloud.functions.v2alpha.GenerateUploadUrlRequest;

                    /**
                     * Encodes the specified GenerateUploadUrlRequest message. Does not implicitly {@link google.cloud.functions.v2alpha.GenerateUploadUrlRequest.verify|verify} messages.
                     * @param message GenerateUploadUrlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.IGenerateUploadUrlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateUploadUrlRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.GenerateUploadUrlRequest.verify|verify} messages.
                     * @param message GenerateUploadUrlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.IGenerateUploadUrlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateUploadUrlRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateUploadUrlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.GenerateUploadUrlRequest;

                    /**
                     * Decodes a GenerateUploadUrlRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateUploadUrlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.GenerateUploadUrlRequest;

                    /**
                     * Verifies a GenerateUploadUrlRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateUploadUrlRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateUploadUrlRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.GenerateUploadUrlRequest;

                    /**
                     * Creates a plain object from a GenerateUploadUrlRequest message. Also converts values to other types if specified.
                     * @param message GenerateUploadUrlRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.GenerateUploadUrlRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateUploadUrlRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GenerateUploadUrlResponse. */
                interface IGenerateUploadUrlResponse {

                    /** GenerateUploadUrlResponse uploadUrl */
                    uploadUrl?: (string|null);

                    /** GenerateUploadUrlResponse storageSource */
                    storageSource?: (google.cloud.functions.v2alpha.IStorageSource|null);
                }

                /** Represents a GenerateUploadUrlResponse. */
                class GenerateUploadUrlResponse implements IGenerateUploadUrlResponse {

                    /**
                     * Constructs a new GenerateUploadUrlResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.IGenerateUploadUrlResponse);

                    /** GenerateUploadUrlResponse uploadUrl. */
                    public uploadUrl: string;

                    /** GenerateUploadUrlResponse storageSource. */
                    public storageSource?: (google.cloud.functions.v2alpha.IStorageSource|null);

                    /**
                     * Creates a new GenerateUploadUrlResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateUploadUrlResponse instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.IGenerateUploadUrlResponse): google.cloud.functions.v2alpha.GenerateUploadUrlResponse;

                    /**
                     * Encodes the specified GenerateUploadUrlResponse message. Does not implicitly {@link google.cloud.functions.v2alpha.GenerateUploadUrlResponse.verify|verify} messages.
                     * @param message GenerateUploadUrlResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.IGenerateUploadUrlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateUploadUrlResponse message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.GenerateUploadUrlResponse.verify|verify} messages.
                     * @param message GenerateUploadUrlResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.IGenerateUploadUrlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateUploadUrlResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateUploadUrlResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.GenerateUploadUrlResponse;

                    /**
                     * Decodes a GenerateUploadUrlResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateUploadUrlResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.GenerateUploadUrlResponse;

                    /**
                     * Verifies a GenerateUploadUrlResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateUploadUrlResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateUploadUrlResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.GenerateUploadUrlResponse;

                    /**
                     * Creates a plain object from a GenerateUploadUrlResponse message. Also converts values to other types if specified.
                     * @param message GenerateUploadUrlResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.GenerateUploadUrlResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateUploadUrlResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GenerateDownloadUrlRequest. */
                interface IGenerateDownloadUrlRequest {

                    /** GenerateDownloadUrlRequest name */
                    name?: (string|null);
                }

                /** Represents a GenerateDownloadUrlRequest. */
                class GenerateDownloadUrlRequest implements IGenerateDownloadUrlRequest {

                    /**
                     * Constructs a new GenerateDownloadUrlRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.IGenerateDownloadUrlRequest);

                    /** GenerateDownloadUrlRequest name. */
                    public name: string;

                    /**
                     * Creates a new GenerateDownloadUrlRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateDownloadUrlRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.IGenerateDownloadUrlRequest): google.cloud.functions.v2alpha.GenerateDownloadUrlRequest;

                    /**
                     * Encodes the specified GenerateDownloadUrlRequest message. Does not implicitly {@link google.cloud.functions.v2alpha.GenerateDownloadUrlRequest.verify|verify} messages.
                     * @param message GenerateDownloadUrlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.IGenerateDownloadUrlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateDownloadUrlRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.GenerateDownloadUrlRequest.verify|verify} messages.
                     * @param message GenerateDownloadUrlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.IGenerateDownloadUrlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateDownloadUrlRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateDownloadUrlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.GenerateDownloadUrlRequest;

                    /**
                     * Decodes a GenerateDownloadUrlRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateDownloadUrlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.GenerateDownloadUrlRequest;

                    /**
                     * Verifies a GenerateDownloadUrlRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateDownloadUrlRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateDownloadUrlRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.GenerateDownloadUrlRequest;

                    /**
                     * Creates a plain object from a GenerateDownloadUrlRequest message. Also converts values to other types if specified.
                     * @param message GenerateDownloadUrlRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.GenerateDownloadUrlRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateDownloadUrlRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GenerateDownloadUrlResponse. */
                interface IGenerateDownloadUrlResponse {

                    /** GenerateDownloadUrlResponse downloadUrl */
                    downloadUrl?: (string|null);
                }

                /** Represents a GenerateDownloadUrlResponse. */
                class GenerateDownloadUrlResponse implements IGenerateDownloadUrlResponse {

                    /**
                     * Constructs a new GenerateDownloadUrlResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.IGenerateDownloadUrlResponse);

                    /** GenerateDownloadUrlResponse downloadUrl. */
                    public downloadUrl: string;

                    /**
                     * Creates a new GenerateDownloadUrlResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateDownloadUrlResponse instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.IGenerateDownloadUrlResponse): google.cloud.functions.v2alpha.GenerateDownloadUrlResponse;

                    /**
                     * Encodes the specified GenerateDownloadUrlResponse message. Does not implicitly {@link google.cloud.functions.v2alpha.GenerateDownloadUrlResponse.verify|verify} messages.
                     * @param message GenerateDownloadUrlResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.IGenerateDownloadUrlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateDownloadUrlResponse message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.GenerateDownloadUrlResponse.verify|verify} messages.
                     * @param message GenerateDownloadUrlResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.IGenerateDownloadUrlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateDownloadUrlResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateDownloadUrlResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.GenerateDownloadUrlResponse;

                    /**
                     * Decodes a GenerateDownloadUrlResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateDownloadUrlResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.GenerateDownloadUrlResponse;

                    /**
                     * Verifies a GenerateDownloadUrlResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateDownloadUrlResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateDownloadUrlResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.GenerateDownloadUrlResponse;

                    /**
                     * Creates a plain object from a GenerateDownloadUrlResponse message. Also converts values to other types if specified.
                     * @param message GenerateDownloadUrlResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.GenerateDownloadUrlResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateDownloadUrlResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListRuntimesRequest. */
                interface IListRuntimesRequest {

                    /** ListRuntimesRequest parent */
                    parent?: (string|null);

                    /** ListRuntimesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListRuntimesRequest. */
                class ListRuntimesRequest implements IListRuntimesRequest {

                    /**
                     * Constructs a new ListRuntimesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.IListRuntimesRequest);

                    /** ListRuntimesRequest parent. */
                    public parent: string;

                    /** ListRuntimesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListRuntimesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRuntimesRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.IListRuntimesRequest): google.cloud.functions.v2alpha.ListRuntimesRequest;

                    /**
                     * Encodes the specified ListRuntimesRequest message. Does not implicitly {@link google.cloud.functions.v2alpha.ListRuntimesRequest.verify|verify} messages.
                     * @param message ListRuntimesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.IListRuntimesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRuntimesRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.ListRuntimesRequest.verify|verify} messages.
                     * @param message ListRuntimesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.IListRuntimesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRuntimesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRuntimesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.ListRuntimesRequest;

                    /**
                     * Decodes a ListRuntimesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRuntimesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.ListRuntimesRequest;

                    /**
                     * Verifies a ListRuntimesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRuntimesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRuntimesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.ListRuntimesRequest;

                    /**
                     * Creates a plain object from a ListRuntimesRequest message. Also converts values to other types if specified.
                     * @param message ListRuntimesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.ListRuntimesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRuntimesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListRuntimesResponse. */
                interface IListRuntimesResponse {

                    /** ListRuntimesResponse runtimes */
                    runtimes?: (google.cloud.functions.v2alpha.ListRuntimesResponse.IRuntime[]|null);
                }

                /** Represents a ListRuntimesResponse. */
                class ListRuntimesResponse implements IListRuntimesResponse {

                    /**
                     * Constructs a new ListRuntimesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.IListRuntimesResponse);

                    /** ListRuntimesResponse runtimes. */
                    public runtimes: google.cloud.functions.v2alpha.ListRuntimesResponse.IRuntime[];

                    /**
                     * Creates a new ListRuntimesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRuntimesResponse instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.IListRuntimesResponse): google.cloud.functions.v2alpha.ListRuntimesResponse;

                    /**
                     * Encodes the specified ListRuntimesResponse message. Does not implicitly {@link google.cloud.functions.v2alpha.ListRuntimesResponse.verify|verify} messages.
                     * @param message ListRuntimesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.IListRuntimesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRuntimesResponse message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.ListRuntimesResponse.verify|verify} messages.
                     * @param message ListRuntimesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.IListRuntimesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRuntimesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRuntimesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.ListRuntimesResponse;

                    /**
                     * Decodes a ListRuntimesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRuntimesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.ListRuntimesResponse;

                    /**
                     * Verifies a ListRuntimesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRuntimesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRuntimesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.ListRuntimesResponse;

                    /**
                     * Creates a plain object from a ListRuntimesResponse message. Also converts values to other types if specified.
                     * @param message ListRuntimesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.ListRuntimesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRuntimesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ListRuntimesResponse {

                    /** Properties of a Runtime. */
                    interface IRuntime {

                        /** Runtime name */
                        name?: (string|null);

                        /** Runtime displayName */
                        displayName?: (string|null);

                        /** Runtime stage */
                        stage?: (google.cloud.functions.v2alpha.ListRuntimesResponse.RuntimeStage|keyof typeof google.cloud.functions.v2alpha.ListRuntimesResponse.RuntimeStage|null);

                        /** Runtime warnings */
                        warnings?: (string[]|null);

                        /** Runtime environment */
                        environment?: (google.cloud.functions.v2alpha.Environment|keyof typeof google.cloud.functions.v2alpha.Environment|null);
                    }

                    /** Represents a Runtime. */
                    class Runtime implements IRuntime {

                        /**
                         * Constructs a new Runtime.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.functions.v2alpha.ListRuntimesResponse.IRuntime);

                        /** Runtime name. */
                        public name: string;

                        /** Runtime displayName. */
                        public displayName: string;

                        /** Runtime stage. */
                        public stage: (google.cloud.functions.v2alpha.ListRuntimesResponse.RuntimeStage|keyof typeof google.cloud.functions.v2alpha.ListRuntimesResponse.RuntimeStage);

                        /** Runtime warnings. */
                        public warnings: string[];

                        /** Runtime environment. */
                        public environment: (google.cloud.functions.v2alpha.Environment|keyof typeof google.cloud.functions.v2alpha.Environment);

                        /**
                         * Creates a new Runtime instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Runtime instance
                         */
                        public static create(properties?: google.cloud.functions.v2alpha.ListRuntimesResponse.IRuntime): google.cloud.functions.v2alpha.ListRuntimesResponse.Runtime;

                        /**
                         * Encodes the specified Runtime message. Does not implicitly {@link google.cloud.functions.v2alpha.ListRuntimesResponse.Runtime.verify|verify} messages.
                         * @param message Runtime message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.functions.v2alpha.ListRuntimesResponse.IRuntime, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Runtime message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.ListRuntimesResponse.Runtime.verify|verify} messages.
                         * @param message Runtime message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.functions.v2alpha.ListRuntimesResponse.IRuntime, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Runtime message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Runtime
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.ListRuntimesResponse.Runtime;

                        /**
                         * Decodes a Runtime message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Runtime
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.ListRuntimesResponse.Runtime;

                        /**
                         * Verifies a Runtime message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Runtime message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Runtime
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.ListRuntimesResponse.Runtime;

                        /**
                         * Creates a plain object from a Runtime message. Also converts values to other types if specified.
                         * @param message Runtime
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.functions.v2alpha.ListRuntimesResponse.Runtime, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Runtime to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** RuntimeStage enum. */
                    enum RuntimeStage {
                        RUNTIME_STAGE_UNSPECIFIED = 0,
                        DEVELOPMENT = 1,
                        ALPHA = 2,
                        BETA = 3,
                        GA = 4,
                        DEPRECATED = 5,
                        DECOMMISSIONED = 6
                    }
                }

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {

                    /** OperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target */
                    target?: (string|null);

                    /** OperationMetadata verb */
                    verb?: (string|null);

                    /** OperationMetadata statusDetail */
                    statusDetail?: (string|null);

                    /** OperationMetadata cancelRequested */
                    cancelRequested?: (boolean|null);

                    /** OperationMetadata apiVersion */
                    apiVersion?: (string|null);

                    /** OperationMetadata requestResource */
                    requestResource?: (google.protobuf.IAny|null);

                    /** OperationMetadata stages */
                    stages?: (google.cloud.functions.v2alpha.IStage[]|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target. */
                    public target: string;

                    /** OperationMetadata verb. */
                    public verb: string;

                    /** OperationMetadata statusDetail. */
                    public statusDetail: string;

                    /** OperationMetadata cancelRequested. */
                    public cancelRequested: boolean;

                    /** OperationMetadata apiVersion. */
                    public apiVersion: string;

                    /** OperationMetadata requestResource. */
                    public requestResource?: (google.protobuf.IAny|null);

                    /** OperationMetadata stages. */
                    public stages: google.cloud.functions.v2alpha.IStage[];

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.IOperationMetadata): google.cloud.functions.v2alpha.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.functions.v2alpha.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.OperationMetadata;

                    /**
                     * Verifies an OperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Stage. */
                interface IStage {

                    /** Stage name */
                    name?: (google.cloud.functions.v2alpha.Stage.Name|keyof typeof google.cloud.functions.v2alpha.Stage.Name|null);

                    /** Stage message */
                    message?: (string|null);

                    /** Stage state */
                    state?: (google.cloud.functions.v2alpha.Stage.State|keyof typeof google.cloud.functions.v2alpha.Stage.State|null);

                    /** Stage resource */
                    resource?: (string|null);

                    /** Stage resourceUri */
                    resourceUri?: (string|null);

                    /** Stage stateMessages */
                    stateMessages?: (google.cloud.functions.v2alpha.IStateMessage[]|null);
                }

                /** Represents a Stage. */
                class Stage implements IStage {

                    /**
                     * Constructs a new Stage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2alpha.IStage);

                    /** Stage name. */
                    public name: (google.cloud.functions.v2alpha.Stage.Name|keyof typeof google.cloud.functions.v2alpha.Stage.Name);

                    /** Stage message. */
                    public message: string;

                    /** Stage state. */
                    public state: (google.cloud.functions.v2alpha.Stage.State|keyof typeof google.cloud.functions.v2alpha.Stage.State);

                    /** Stage resource. */
                    public resource: string;

                    /** Stage resourceUri. */
                    public resourceUri: string;

                    /** Stage stateMessages. */
                    public stateMessages: google.cloud.functions.v2alpha.IStateMessage[];

                    /**
                     * Creates a new Stage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Stage instance
                     */
                    public static create(properties?: google.cloud.functions.v2alpha.IStage): google.cloud.functions.v2alpha.Stage;

                    /**
                     * Encodes the specified Stage message. Does not implicitly {@link google.cloud.functions.v2alpha.Stage.verify|verify} messages.
                     * @param message Stage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2alpha.IStage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Stage message, length delimited. Does not implicitly {@link google.cloud.functions.v2alpha.Stage.verify|verify} messages.
                     * @param message Stage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2alpha.IStage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Stage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Stage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2alpha.Stage;

                    /**
                     * Decodes a Stage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Stage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2alpha.Stage;

                    /**
                     * Verifies a Stage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Stage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Stage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2alpha.Stage;

                    /**
                     * Creates a plain object from a Stage message. Also converts values to other types if specified.
                     * @param message Stage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2alpha.Stage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Stage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Stage {

                    /** Name enum. */
                    enum Name {
                        NAME_UNSPECIFIED = 0,
                        ARTIFACT_REGISTRY = 1,
                        BUILD = 2,
                        SERVICE = 3,
                        TRIGGER = 4,
                        SERVICE_ROLLBACK = 5,
                        TRIGGER_ROLLBACK = 6
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        NOT_STARTED = 1,
                        IN_PROGRESS = 2,
                        COMPLETE = 3
                    }
                }
            }

            /** Namespace v2beta. */
            namespace v2beta {

                /** Represents a FunctionService */
                class FunctionService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new FunctionService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new FunctionService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): FunctionService;

                    /**
                     * Calls GetFunction.
                     * @param request GetFunctionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Function
                     */
                    public getFunction(request: google.cloud.functions.v2beta.IGetFunctionRequest, callback: google.cloud.functions.v2beta.FunctionService.GetFunctionCallback): void;

                    /**
                     * Calls GetFunction.
                     * @param request GetFunctionRequest message or plain object
                     * @returns Promise
                     */
                    public getFunction(request: google.cloud.functions.v2beta.IGetFunctionRequest): Promise<google.cloud.functions.v2beta.Function>;

                    /**
                     * Calls ListFunctions.
                     * @param request ListFunctionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFunctionsResponse
                     */
                    public listFunctions(request: google.cloud.functions.v2beta.IListFunctionsRequest, callback: google.cloud.functions.v2beta.FunctionService.ListFunctionsCallback): void;

                    /**
                     * Calls ListFunctions.
                     * @param request ListFunctionsRequest message or plain object
                     * @returns Promise
                     */
                    public listFunctions(request: google.cloud.functions.v2beta.IListFunctionsRequest): Promise<google.cloud.functions.v2beta.ListFunctionsResponse>;

                    /**
                     * Calls CreateFunction.
                     * @param request CreateFunctionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public createFunction(request: google.cloud.functions.v2beta.ICreateFunctionRequest, callback: google.cloud.functions.v2beta.FunctionService.CreateFunctionCallback): void;

                    /**
                     * Calls CreateFunction.
                     * @param request CreateFunctionRequest message or plain object
                     * @returns Promise
                     */
                    public createFunction(request: google.cloud.functions.v2beta.ICreateFunctionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls UpdateFunction.
                     * @param request UpdateFunctionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public updateFunction(request: google.cloud.functions.v2beta.IUpdateFunctionRequest, callback: google.cloud.functions.v2beta.FunctionService.UpdateFunctionCallback): void;

                    /**
                     * Calls UpdateFunction.
                     * @param request UpdateFunctionRequest message or plain object
                     * @returns Promise
                     */
                    public updateFunction(request: google.cloud.functions.v2beta.IUpdateFunctionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls DeleteFunction.
                     * @param request DeleteFunctionRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public deleteFunction(request: google.cloud.functions.v2beta.IDeleteFunctionRequest, callback: google.cloud.functions.v2beta.FunctionService.DeleteFunctionCallback): void;

                    /**
                     * Calls DeleteFunction.
                     * @param request DeleteFunctionRequest message or plain object
                     * @returns Promise
                     */
                    public deleteFunction(request: google.cloud.functions.v2beta.IDeleteFunctionRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls GenerateUploadUrl.
                     * @param request GenerateUploadUrlRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateUploadUrlResponse
                     */
                    public generateUploadUrl(request: google.cloud.functions.v2beta.IGenerateUploadUrlRequest, callback: google.cloud.functions.v2beta.FunctionService.GenerateUploadUrlCallback): void;

                    /**
                     * Calls GenerateUploadUrl.
                     * @param request GenerateUploadUrlRequest message or plain object
                     * @returns Promise
                     */
                    public generateUploadUrl(request: google.cloud.functions.v2beta.IGenerateUploadUrlRequest): Promise<google.cloud.functions.v2beta.GenerateUploadUrlResponse>;

                    /**
                     * Calls GenerateDownloadUrl.
                     * @param request GenerateDownloadUrlRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GenerateDownloadUrlResponse
                     */
                    public generateDownloadUrl(request: google.cloud.functions.v2beta.IGenerateDownloadUrlRequest, callback: google.cloud.functions.v2beta.FunctionService.GenerateDownloadUrlCallback): void;

                    /**
                     * Calls GenerateDownloadUrl.
                     * @param request GenerateDownloadUrlRequest message or plain object
                     * @returns Promise
                     */
                    public generateDownloadUrl(request: google.cloud.functions.v2beta.IGenerateDownloadUrlRequest): Promise<google.cloud.functions.v2beta.GenerateDownloadUrlResponse>;

                    /**
                     * Calls ListRuntimes.
                     * @param request ListRuntimesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListRuntimesResponse
                     */
                    public listRuntimes(request: google.cloud.functions.v2beta.IListRuntimesRequest, callback: google.cloud.functions.v2beta.FunctionService.ListRuntimesCallback): void;

                    /**
                     * Calls ListRuntimes.
                     * @param request ListRuntimesRequest message or plain object
                     * @returns Promise
                     */
                    public listRuntimes(request: google.cloud.functions.v2beta.IListRuntimesRequest): Promise<google.cloud.functions.v2beta.ListRuntimesResponse>;
                }

                namespace FunctionService {

                    /**
                     * Callback as used by {@link google.cloud.functions.v2beta.FunctionService#getFunction}.
                     * @param error Error, if any
                     * @param [response] Function
                     */
                    type GetFunctionCallback = (error: (Error|null), response?: google.cloud.functions.v2beta.Function) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v2beta.FunctionService#listFunctions}.
                     * @param error Error, if any
                     * @param [response] ListFunctionsResponse
                     */
                    type ListFunctionsCallback = (error: (Error|null), response?: google.cloud.functions.v2beta.ListFunctionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v2beta.FunctionService#createFunction}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type CreateFunctionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v2beta.FunctionService#updateFunction}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type UpdateFunctionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v2beta.FunctionService#deleteFunction}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type DeleteFunctionCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v2beta.FunctionService#generateUploadUrl}.
                     * @param error Error, if any
                     * @param [response] GenerateUploadUrlResponse
                     */
                    type GenerateUploadUrlCallback = (error: (Error|null), response?: google.cloud.functions.v2beta.GenerateUploadUrlResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v2beta.FunctionService#generateDownloadUrl}.
                     * @param error Error, if any
                     * @param [response] GenerateDownloadUrlResponse
                     */
                    type GenerateDownloadUrlCallback = (error: (Error|null), response?: google.cloud.functions.v2beta.GenerateDownloadUrlResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.functions.v2beta.FunctionService#listRuntimes}.
                     * @param error Error, if any
                     * @param [response] ListRuntimesResponse
                     */
                    type ListRuntimesCallback = (error: (Error|null), response?: google.cloud.functions.v2beta.ListRuntimesResponse) => void;
                }

                /** Environment enum. */
                enum Environment {
                    ENVIRONMENT_UNSPECIFIED = 0,
                    GEN_1 = 1,
                    GEN_2 = 2
                }

                /** Properties of a Function. */
                interface IFunction {

                    /** Function name */
                    name?: (string|null);

                    /** Function environment */
                    environment?: (google.cloud.functions.v2beta.Environment|keyof typeof google.cloud.functions.v2beta.Environment|null);

                    /** Function description */
                    description?: (string|null);

                    /** Function buildConfig */
                    buildConfig?: (google.cloud.functions.v2beta.IBuildConfig|null);

                    /** Function serviceConfig */
                    serviceConfig?: (google.cloud.functions.v2beta.IServiceConfig|null);

                    /** Function eventTrigger */
                    eventTrigger?: (google.cloud.functions.v2beta.IEventTrigger|null);

                    /** Function state */
                    state?: (google.cloud.functions.v2beta.Function.State|keyof typeof google.cloud.functions.v2beta.Function.State|null);

                    /** Function updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Function labels */
                    labels?: ({ [k: string]: string }|null);

                    /** Function stateMessages */
                    stateMessages?: (google.cloud.functions.v2beta.IStateMessage[]|null);
                }

                /** Represents a Function. */
                class Function implements IFunction {

                    /**
                     * Constructs a new Function.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.IFunction);

                    /** Function name. */
                    public name: string;

                    /** Function environment. */
                    public environment: (google.cloud.functions.v2beta.Environment|keyof typeof google.cloud.functions.v2beta.Environment);

                    /** Function description. */
                    public description: string;

                    /** Function buildConfig. */
                    public buildConfig?: (google.cloud.functions.v2beta.IBuildConfig|null);

                    /** Function serviceConfig. */
                    public serviceConfig?: (google.cloud.functions.v2beta.IServiceConfig|null);

                    /** Function eventTrigger. */
                    public eventTrigger?: (google.cloud.functions.v2beta.IEventTrigger|null);

                    /** Function state. */
                    public state: (google.cloud.functions.v2beta.Function.State|keyof typeof google.cloud.functions.v2beta.Function.State);

                    /** Function updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Function labels. */
                    public labels: { [k: string]: string };

                    /** Function stateMessages. */
                    public stateMessages: google.cloud.functions.v2beta.IStateMessage[];

                    /**
                     * Creates a new Function instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Function instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.IFunction): google.cloud.functions.v2beta.Function;

                    /**
                     * Encodes the specified Function message. Does not implicitly {@link google.cloud.functions.v2beta.Function.verify|verify} messages.
                     * @param message Function message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.IFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Function message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.Function.verify|verify} messages.
                     * @param message Function message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.IFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Function message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Function
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.Function;

                    /**
                     * Decodes a Function message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Function
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.Function;

                    /**
                     * Verifies a Function message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Function message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Function
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.Function;

                    /**
                     * Creates a plain object from a Function message. Also converts values to other types if specified.
                     * @param message Function
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.Function, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Function to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Function {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        FAILED = 2,
                        DEPLOYING = 3,
                        DELETING = 4,
                        UNKNOWN = 5
                    }
                }

                /** Properties of a StateMessage. */
                interface IStateMessage {

                    /** StateMessage severity */
                    severity?: (google.cloud.functions.v2beta.StateMessage.Severity|keyof typeof google.cloud.functions.v2beta.StateMessage.Severity|null);

                    /** StateMessage type */
                    type?: (string|null);

                    /** StateMessage message */
                    message?: (string|null);
                }

                /** Represents a StateMessage. */
                class StateMessage implements IStateMessage {

                    /**
                     * Constructs a new StateMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.IStateMessage);

                    /** StateMessage severity. */
                    public severity: (google.cloud.functions.v2beta.StateMessage.Severity|keyof typeof google.cloud.functions.v2beta.StateMessage.Severity);

                    /** StateMessage type. */
                    public type: string;

                    /** StateMessage message. */
                    public message: string;

                    /**
                     * Creates a new StateMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StateMessage instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.IStateMessage): google.cloud.functions.v2beta.StateMessage;

                    /**
                     * Encodes the specified StateMessage message. Does not implicitly {@link google.cloud.functions.v2beta.StateMessage.verify|verify} messages.
                     * @param message StateMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.IStateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StateMessage message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.StateMessage.verify|verify} messages.
                     * @param message StateMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.IStateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StateMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StateMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.StateMessage;

                    /**
                     * Decodes a StateMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StateMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.StateMessage;

                    /**
                     * Verifies a StateMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StateMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StateMessage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.StateMessage;

                    /**
                     * Creates a plain object from a StateMessage message. Also converts values to other types if specified.
                     * @param message StateMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.StateMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StateMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace StateMessage {

                    /** Severity enum. */
                    enum Severity {
                        SEVERITY_UNSPECIFIED = 0,
                        ERROR = 1,
                        WARNING = 2,
                        INFO = 3
                    }
                }

                /** Properties of a StorageSource. */
                interface IStorageSource {

                    /** StorageSource bucket */
                    bucket?: (string|null);

                    /** StorageSource object */
                    object?: (string|null);

                    /** StorageSource generation */
                    generation?: (number|Long|string|null);
                }

                /** Represents a StorageSource. */
                class StorageSource implements IStorageSource {

                    /**
                     * Constructs a new StorageSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.IStorageSource);

                    /** StorageSource bucket. */
                    public bucket: string;

                    /** StorageSource object. */
                    public object: string;

                    /** StorageSource generation. */
                    public generation: (number|Long|string);

                    /**
                     * Creates a new StorageSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StorageSource instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.IStorageSource): google.cloud.functions.v2beta.StorageSource;

                    /**
                     * Encodes the specified StorageSource message. Does not implicitly {@link google.cloud.functions.v2beta.StorageSource.verify|verify} messages.
                     * @param message StorageSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.IStorageSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StorageSource message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.StorageSource.verify|verify} messages.
                     * @param message StorageSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.IStorageSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StorageSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StorageSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.StorageSource;

                    /**
                     * Decodes a StorageSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StorageSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.StorageSource;

                    /**
                     * Verifies a StorageSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StorageSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StorageSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.StorageSource;

                    /**
                     * Creates a plain object from a StorageSource message. Also converts values to other types if specified.
                     * @param message StorageSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.StorageSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StorageSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RepoSource. */
                interface IRepoSource {

                    /** RepoSource branchName */
                    branchName?: (string|null);

                    /** RepoSource tagName */
                    tagName?: (string|null);

                    /** RepoSource commitSha */
                    commitSha?: (string|null);

                    /** RepoSource projectId */
                    projectId?: (string|null);

                    /** RepoSource repoName */
                    repoName?: (string|null);

                    /** RepoSource dir */
                    dir?: (string|null);

                    /** RepoSource invertRegex */
                    invertRegex?: (boolean|null);
                }

                /** Represents a RepoSource. */
                class RepoSource implements IRepoSource {

                    /**
                     * Constructs a new RepoSource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.IRepoSource);

                    /** RepoSource branchName. */
                    public branchName?: (string|null);

                    /** RepoSource tagName. */
                    public tagName?: (string|null);

                    /** RepoSource commitSha. */
                    public commitSha?: (string|null);

                    /** RepoSource projectId. */
                    public projectId: string;

                    /** RepoSource repoName. */
                    public repoName: string;

                    /** RepoSource dir. */
                    public dir: string;

                    /** RepoSource invertRegex. */
                    public invertRegex: boolean;

                    /** RepoSource revision. */
                    public revision?: ("branchName"|"tagName"|"commitSha");

                    /**
                     * Creates a new RepoSource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RepoSource instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.IRepoSource): google.cloud.functions.v2beta.RepoSource;

                    /**
                     * Encodes the specified RepoSource message. Does not implicitly {@link google.cloud.functions.v2beta.RepoSource.verify|verify} messages.
                     * @param message RepoSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.IRepoSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RepoSource message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.RepoSource.verify|verify} messages.
                     * @param message RepoSource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.IRepoSource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RepoSource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RepoSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.RepoSource;

                    /**
                     * Decodes a RepoSource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RepoSource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.RepoSource;

                    /**
                     * Verifies a RepoSource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RepoSource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RepoSource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.RepoSource;

                    /**
                     * Creates a plain object from a RepoSource message. Also converts values to other types if specified.
                     * @param message RepoSource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.RepoSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RepoSource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Source. */
                interface ISource {

                    /** Source storageSource */
                    storageSource?: (google.cloud.functions.v2beta.IStorageSource|null);

                    /** Source repoSource */
                    repoSource?: (google.cloud.functions.v2beta.IRepoSource|null);
                }

                /** Represents a Source. */
                class Source implements ISource {

                    /**
                     * Constructs a new Source.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.ISource);

                    /** Source storageSource. */
                    public storageSource?: (google.cloud.functions.v2beta.IStorageSource|null);

                    /** Source repoSource. */
                    public repoSource?: (google.cloud.functions.v2beta.IRepoSource|null);

                    /** Source source. */
                    public source?: ("storageSource"|"repoSource");

                    /**
                     * Creates a new Source instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Source instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.ISource): google.cloud.functions.v2beta.Source;

                    /**
                     * Encodes the specified Source message. Does not implicitly {@link google.cloud.functions.v2beta.Source.verify|verify} messages.
                     * @param message Source message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Source message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.Source.verify|verify} messages.
                     * @param message Source message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Source message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Source
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.Source;

                    /**
                     * Decodes a Source message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Source
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.Source;

                    /**
                     * Verifies a Source message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Source message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Source
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.Source;

                    /**
                     * Creates a plain object from a Source message. Also converts values to other types if specified.
                     * @param message Source
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.Source, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Source to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SourceProvenance. */
                interface ISourceProvenance {

                    /** SourceProvenance resolvedStorageSource */
                    resolvedStorageSource?: (google.cloud.functions.v2beta.IStorageSource|null);

                    /** SourceProvenance resolvedRepoSource */
                    resolvedRepoSource?: (google.cloud.functions.v2beta.IRepoSource|null);
                }

                /** Represents a SourceProvenance. */
                class SourceProvenance implements ISourceProvenance {

                    /**
                     * Constructs a new SourceProvenance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.ISourceProvenance);

                    /** SourceProvenance resolvedStorageSource. */
                    public resolvedStorageSource?: (google.cloud.functions.v2beta.IStorageSource|null);

                    /** SourceProvenance resolvedRepoSource. */
                    public resolvedRepoSource?: (google.cloud.functions.v2beta.IRepoSource|null);

                    /**
                     * Creates a new SourceProvenance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SourceProvenance instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.ISourceProvenance): google.cloud.functions.v2beta.SourceProvenance;

                    /**
                     * Encodes the specified SourceProvenance message. Does not implicitly {@link google.cloud.functions.v2beta.SourceProvenance.verify|verify} messages.
                     * @param message SourceProvenance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.ISourceProvenance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SourceProvenance message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.SourceProvenance.verify|verify} messages.
                     * @param message SourceProvenance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.ISourceProvenance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SourceProvenance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SourceProvenance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.SourceProvenance;

                    /**
                     * Decodes a SourceProvenance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SourceProvenance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.SourceProvenance;

                    /**
                     * Verifies a SourceProvenance message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SourceProvenance message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SourceProvenance
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.SourceProvenance;

                    /**
                     * Creates a plain object from a SourceProvenance message. Also converts values to other types if specified.
                     * @param message SourceProvenance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.SourceProvenance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SourceProvenance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BuildConfig. */
                interface IBuildConfig {

                    /** BuildConfig build */
                    build?: (string|null);

                    /** BuildConfig runtime */
                    runtime?: (string|null);

                    /** BuildConfig entryPoint */
                    entryPoint?: (string|null);

                    /** BuildConfig source */
                    source?: (google.cloud.functions.v2beta.ISource|null);

                    /** BuildConfig sourceProvenance */
                    sourceProvenance?: (google.cloud.functions.v2beta.ISourceProvenance|null);

                    /** BuildConfig workerPool */
                    workerPool?: (string|null);

                    /** BuildConfig environmentVariables */
                    environmentVariables?: ({ [k: string]: string }|null);

                    /** BuildConfig dockerRepository */
                    dockerRepository?: (string|null);
                }

                /** Represents a BuildConfig. */
                class BuildConfig implements IBuildConfig {

                    /**
                     * Constructs a new BuildConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.IBuildConfig);

                    /** BuildConfig build. */
                    public build: string;

                    /** BuildConfig runtime. */
                    public runtime: string;

                    /** BuildConfig entryPoint. */
                    public entryPoint: string;

                    /** BuildConfig source. */
                    public source?: (google.cloud.functions.v2beta.ISource|null);

                    /** BuildConfig sourceProvenance. */
                    public sourceProvenance?: (google.cloud.functions.v2beta.ISourceProvenance|null);

                    /** BuildConfig workerPool. */
                    public workerPool: string;

                    /** BuildConfig environmentVariables. */
                    public environmentVariables: { [k: string]: string };

                    /** BuildConfig dockerRepository. */
                    public dockerRepository: string;

                    /**
                     * Creates a new BuildConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BuildConfig instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.IBuildConfig): google.cloud.functions.v2beta.BuildConfig;

                    /**
                     * Encodes the specified BuildConfig message. Does not implicitly {@link google.cloud.functions.v2beta.BuildConfig.verify|verify} messages.
                     * @param message BuildConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.IBuildConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BuildConfig message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.BuildConfig.verify|verify} messages.
                     * @param message BuildConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.IBuildConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BuildConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BuildConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.BuildConfig;

                    /**
                     * Decodes a BuildConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BuildConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.BuildConfig;

                    /**
                     * Verifies a BuildConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BuildConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BuildConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.BuildConfig;

                    /**
                     * Creates a plain object from a BuildConfig message. Also converts values to other types if specified.
                     * @param message BuildConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.BuildConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BuildConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ServiceConfig. */
                interface IServiceConfig {

                    /** ServiceConfig service */
                    service?: (string|null);

                    /** ServiceConfig timeoutSeconds */
                    timeoutSeconds?: (number|null);

                    /** ServiceConfig availableMemory */
                    availableMemory?: (string|null);

                    /** ServiceConfig environmentVariables */
                    environmentVariables?: ({ [k: string]: string }|null);

                    /** ServiceConfig maxInstanceCount */
                    maxInstanceCount?: (number|null);

                    /** ServiceConfig minInstanceCount */
                    minInstanceCount?: (number|null);

                    /** ServiceConfig vpcConnector */
                    vpcConnector?: (string|null);

                    /** ServiceConfig vpcConnectorEgressSettings */
                    vpcConnectorEgressSettings?: (google.cloud.functions.v2beta.ServiceConfig.VpcConnectorEgressSettings|keyof typeof google.cloud.functions.v2beta.ServiceConfig.VpcConnectorEgressSettings|null);

                    /** ServiceConfig ingressSettings */
                    ingressSettings?: (google.cloud.functions.v2beta.ServiceConfig.IngressSettings|keyof typeof google.cloud.functions.v2beta.ServiceConfig.IngressSettings|null);

                    /** ServiceConfig uri */
                    uri?: (string|null);

                    /** ServiceConfig serviceAccountEmail */
                    serviceAccountEmail?: (string|null);

                    /** ServiceConfig allTrafficOnLatestRevision */
                    allTrafficOnLatestRevision?: (boolean|null);

                    /** ServiceConfig secretEnvironmentVariables */
                    secretEnvironmentVariables?: (google.cloud.functions.v2beta.ISecretEnvVar[]|null);

                    /** ServiceConfig secretVolumes */
                    secretVolumes?: (google.cloud.functions.v2beta.ISecretVolume[]|null);

                    /** ServiceConfig revision */
                    revision?: (string|null);
                }

                /** Represents a ServiceConfig. */
                class ServiceConfig implements IServiceConfig {

                    /**
                     * Constructs a new ServiceConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.IServiceConfig);

                    /** ServiceConfig service. */
                    public service: string;

                    /** ServiceConfig timeoutSeconds. */
                    public timeoutSeconds: number;

                    /** ServiceConfig availableMemory. */
                    public availableMemory: string;

                    /** ServiceConfig environmentVariables. */
                    public environmentVariables: { [k: string]: string };

                    /** ServiceConfig maxInstanceCount. */
                    public maxInstanceCount: number;

                    /** ServiceConfig minInstanceCount. */
                    public minInstanceCount: number;

                    /** ServiceConfig vpcConnector. */
                    public vpcConnector: string;

                    /** ServiceConfig vpcConnectorEgressSettings. */
                    public vpcConnectorEgressSettings: (google.cloud.functions.v2beta.ServiceConfig.VpcConnectorEgressSettings|keyof typeof google.cloud.functions.v2beta.ServiceConfig.VpcConnectorEgressSettings);

                    /** ServiceConfig ingressSettings. */
                    public ingressSettings: (google.cloud.functions.v2beta.ServiceConfig.IngressSettings|keyof typeof google.cloud.functions.v2beta.ServiceConfig.IngressSettings);

                    /** ServiceConfig uri. */
                    public uri: string;

                    /** ServiceConfig serviceAccountEmail. */
                    public serviceAccountEmail: string;

                    /** ServiceConfig allTrafficOnLatestRevision. */
                    public allTrafficOnLatestRevision: boolean;

                    /** ServiceConfig secretEnvironmentVariables. */
                    public secretEnvironmentVariables: google.cloud.functions.v2beta.ISecretEnvVar[];

                    /** ServiceConfig secretVolumes. */
                    public secretVolumes: google.cloud.functions.v2beta.ISecretVolume[];

                    /** ServiceConfig revision. */
                    public revision: string;

                    /**
                     * Creates a new ServiceConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServiceConfig instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.IServiceConfig): google.cloud.functions.v2beta.ServiceConfig;

                    /**
                     * Encodes the specified ServiceConfig message. Does not implicitly {@link google.cloud.functions.v2beta.ServiceConfig.verify|verify} messages.
                     * @param message ServiceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.IServiceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServiceConfig message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.ServiceConfig.verify|verify} messages.
                     * @param message ServiceConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.IServiceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServiceConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServiceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.ServiceConfig;

                    /**
                     * Decodes a ServiceConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServiceConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.ServiceConfig;

                    /**
                     * Verifies a ServiceConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServiceConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServiceConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.ServiceConfig;

                    /**
                     * Creates a plain object from a ServiceConfig message. Also converts values to other types if specified.
                     * @param message ServiceConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.ServiceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServiceConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ServiceConfig {

                    /** VpcConnectorEgressSettings enum. */
                    enum VpcConnectorEgressSettings {
                        VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED = 0,
                        PRIVATE_RANGES_ONLY = 1,
                        ALL_TRAFFIC = 2
                    }

                    /** IngressSettings enum. */
                    enum IngressSettings {
                        INGRESS_SETTINGS_UNSPECIFIED = 0,
                        ALLOW_ALL = 1,
                        ALLOW_INTERNAL_ONLY = 2,
                        ALLOW_INTERNAL_AND_GCLB = 3
                    }
                }

                /** Properties of a SecretEnvVar. */
                interface ISecretEnvVar {

                    /** SecretEnvVar key */
                    key?: (string|null);

                    /** SecretEnvVar projectId */
                    projectId?: (string|null);

                    /** SecretEnvVar secret */
                    secret?: (string|null);

                    /** SecretEnvVar version */
                    version?: (string|null);
                }

                /** Represents a SecretEnvVar. */
                class SecretEnvVar implements ISecretEnvVar {

                    /**
                     * Constructs a new SecretEnvVar.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.ISecretEnvVar);

                    /** SecretEnvVar key. */
                    public key: string;

                    /** SecretEnvVar projectId. */
                    public projectId: string;

                    /** SecretEnvVar secret. */
                    public secret: string;

                    /** SecretEnvVar version. */
                    public version: string;

                    /**
                     * Creates a new SecretEnvVar instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SecretEnvVar instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.ISecretEnvVar): google.cloud.functions.v2beta.SecretEnvVar;

                    /**
                     * Encodes the specified SecretEnvVar message. Does not implicitly {@link google.cloud.functions.v2beta.SecretEnvVar.verify|verify} messages.
                     * @param message SecretEnvVar message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.ISecretEnvVar, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SecretEnvVar message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.SecretEnvVar.verify|verify} messages.
                     * @param message SecretEnvVar message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.ISecretEnvVar, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SecretEnvVar message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SecretEnvVar
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.SecretEnvVar;

                    /**
                     * Decodes a SecretEnvVar message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SecretEnvVar
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.SecretEnvVar;

                    /**
                     * Verifies a SecretEnvVar message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SecretEnvVar message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SecretEnvVar
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.SecretEnvVar;

                    /**
                     * Creates a plain object from a SecretEnvVar message. Also converts values to other types if specified.
                     * @param message SecretEnvVar
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.SecretEnvVar, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SecretEnvVar to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SecretVolume. */
                interface ISecretVolume {

                    /** SecretVolume mountPath */
                    mountPath?: (string|null);

                    /** SecretVolume projectId */
                    projectId?: (string|null);

                    /** SecretVolume secret */
                    secret?: (string|null);

                    /** SecretVolume versions */
                    versions?: (google.cloud.functions.v2beta.SecretVolume.ISecretVersion[]|null);
                }

                /** Represents a SecretVolume. */
                class SecretVolume implements ISecretVolume {

                    /**
                     * Constructs a new SecretVolume.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.ISecretVolume);

                    /** SecretVolume mountPath. */
                    public mountPath: string;

                    /** SecretVolume projectId. */
                    public projectId: string;

                    /** SecretVolume secret. */
                    public secret: string;

                    /** SecretVolume versions. */
                    public versions: google.cloud.functions.v2beta.SecretVolume.ISecretVersion[];

                    /**
                     * Creates a new SecretVolume instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SecretVolume instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.ISecretVolume): google.cloud.functions.v2beta.SecretVolume;

                    /**
                     * Encodes the specified SecretVolume message. Does not implicitly {@link google.cloud.functions.v2beta.SecretVolume.verify|verify} messages.
                     * @param message SecretVolume message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.ISecretVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SecretVolume message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.SecretVolume.verify|verify} messages.
                     * @param message SecretVolume message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.ISecretVolume, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SecretVolume message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SecretVolume
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.SecretVolume;

                    /**
                     * Decodes a SecretVolume message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SecretVolume
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.SecretVolume;

                    /**
                     * Verifies a SecretVolume message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SecretVolume message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SecretVolume
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.SecretVolume;

                    /**
                     * Creates a plain object from a SecretVolume message. Also converts values to other types if specified.
                     * @param message SecretVolume
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.SecretVolume, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SecretVolume to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace SecretVolume {

                    /** Properties of a SecretVersion. */
                    interface ISecretVersion {

                        /** SecretVersion version */
                        version?: (string|null);

                        /** SecretVersion path */
                        path?: (string|null);
                    }

                    /** Represents a SecretVersion. */
                    class SecretVersion implements ISecretVersion {

                        /**
                         * Constructs a new SecretVersion.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.functions.v2beta.SecretVolume.ISecretVersion);

                        /** SecretVersion version. */
                        public version: string;

                        /** SecretVersion path. */
                        public path: string;

                        /**
                         * Creates a new SecretVersion instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SecretVersion instance
                         */
                        public static create(properties?: google.cloud.functions.v2beta.SecretVolume.ISecretVersion): google.cloud.functions.v2beta.SecretVolume.SecretVersion;

                        /**
                         * Encodes the specified SecretVersion message. Does not implicitly {@link google.cloud.functions.v2beta.SecretVolume.SecretVersion.verify|verify} messages.
                         * @param message SecretVersion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.functions.v2beta.SecretVolume.ISecretVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SecretVersion message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.SecretVolume.SecretVersion.verify|verify} messages.
                         * @param message SecretVersion message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.functions.v2beta.SecretVolume.ISecretVersion, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SecretVersion message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SecretVersion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.SecretVolume.SecretVersion;

                        /**
                         * Decodes a SecretVersion message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SecretVersion
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.SecretVolume.SecretVersion;

                        /**
                         * Verifies a SecretVersion message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SecretVersion message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SecretVersion
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.SecretVolume.SecretVersion;

                        /**
                         * Creates a plain object from a SecretVersion message. Also converts values to other types if specified.
                         * @param message SecretVersion
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.functions.v2beta.SecretVolume.SecretVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SecretVersion to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of an EventTrigger. */
                interface IEventTrigger {

                    /** EventTrigger trigger */
                    trigger?: (string|null);

                    /** EventTrigger triggerRegion */
                    triggerRegion?: (string|null);

                    /** EventTrigger eventType */
                    eventType?: (string|null);

                    /** EventTrigger eventFilters */
                    eventFilters?: (google.cloud.functions.v2beta.IEventFilter[]|null);

                    /** EventTrigger pubsubTopic */
                    pubsubTopic?: (string|null);

                    /** EventTrigger serviceAccountEmail */
                    serviceAccountEmail?: (string|null);

                    /** EventTrigger retryPolicy */
                    retryPolicy?: (google.cloud.functions.v2beta.EventTrigger.RetryPolicy|keyof typeof google.cloud.functions.v2beta.EventTrigger.RetryPolicy|null);

                    /** EventTrigger channel */
                    channel?: (string|null);
                }

                /** Represents an EventTrigger. */
                class EventTrigger implements IEventTrigger {

                    /**
                     * Constructs a new EventTrigger.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.IEventTrigger);

                    /** EventTrigger trigger. */
                    public trigger: string;

                    /** EventTrigger triggerRegion. */
                    public triggerRegion: string;

                    /** EventTrigger eventType. */
                    public eventType: string;

                    /** EventTrigger eventFilters. */
                    public eventFilters: google.cloud.functions.v2beta.IEventFilter[];

                    /** EventTrigger pubsubTopic. */
                    public pubsubTopic: string;

                    /** EventTrigger serviceAccountEmail. */
                    public serviceAccountEmail: string;

                    /** EventTrigger retryPolicy. */
                    public retryPolicy: (google.cloud.functions.v2beta.EventTrigger.RetryPolicy|keyof typeof google.cloud.functions.v2beta.EventTrigger.RetryPolicy);

                    /** EventTrigger channel. */
                    public channel: string;

                    /**
                     * Creates a new EventTrigger instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EventTrigger instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.IEventTrigger): google.cloud.functions.v2beta.EventTrigger;

                    /**
                     * Encodes the specified EventTrigger message. Does not implicitly {@link google.cloud.functions.v2beta.EventTrigger.verify|verify} messages.
                     * @param message EventTrigger message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.IEventTrigger, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EventTrigger message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.EventTrigger.verify|verify} messages.
                     * @param message EventTrigger message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.IEventTrigger, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EventTrigger message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EventTrigger
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.EventTrigger;

                    /**
                     * Decodes an EventTrigger message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EventTrigger
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.EventTrigger;

                    /**
                     * Verifies an EventTrigger message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EventTrigger message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EventTrigger
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.EventTrigger;

                    /**
                     * Creates a plain object from an EventTrigger message. Also converts values to other types if specified.
                     * @param message EventTrigger
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.EventTrigger, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EventTrigger to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace EventTrigger {

                    /** RetryPolicy enum. */
                    enum RetryPolicy {
                        RETRY_POLICY_UNSPECIFIED = 0,
                        RETRY_POLICY_DO_NOT_RETRY = 1,
                        RETRY_POLICY_RETRY = 2
                    }
                }

                /** Properties of an EventFilter. */
                interface IEventFilter {

                    /** EventFilter attribute */
                    attribute?: (string|null);

                    /** EventFilter value */
                    value?: (string|null);

                    /** EventFilter operator */
                    operator?: (string|null);
                }

                /** Represents an EventFilter. */
                class EventFilter implements IEventFilter {

                    /**
                     * Constructs a new EventFilter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.IEventFilter);

                    /** EventFilter attribute. */
                    public attribute: string;

                    /** EventFilter value. */
                    public value: string;

                    /** EventFilter operator. */
                    public operator: string;

                    /**
                     * Creates a new EventFilter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EventFilter instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.IEventFilter): google.cloud.functions.v2beta.EventFilter;

                    /**
                     * Encodes the specified EventFilter message. Does not implicitly {@link google.cloud.functions.v2beta.EventFilter.verify|verify} messages.
                     * @param message EventFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.IEventFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EventFilter message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.EventFilter.verify|verify} messages.
                     * @param message EventFilter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.IEventFilter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EventFilter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EventFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.EventFilter;

                    /**
                     * Decodes an EventFilter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EventFilter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.EventFilter;

                    /**
                     * Verifies an EventFilter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EventFilter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EventFilter
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.EventFilter;

                    /**
                     * Creates a plain object from an EventFilter message. Also converts values to other types if specified.
                     * @param message EventFilter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.EventFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EventFilter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetFunctionRequest. */
                interface IGetFunctionRequest {

                    /** GetFunctionRequest name */
                    name?: (string|null);
                }

                /** Represents a GetFunctionRequest. */
                class GetFunctionRequest implements IGetFunctionRequest {

                    /**
                     * Constructs a new GetFunctionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.IGetFunctionRequest);

                    /** GetFunctionRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetFunctionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetFunctionRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.IGetFunctionRequest): google.cloud.functions.v2beta.GetFunctionRequest;

                    /**
                     * Encodes the specified GetFunctionRequest message. Does not implicitly {@link google.cloud.functions.v2beta.GetFunctionRequest.verify|verify} messages.
                     * @param message GetFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.IGetFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetFunctionRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.GetFunctionRequest.verify|verify} messages.
                     * @param message GetFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.IGetFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetFunctionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.GetFunctionRequest;

                    /**
                     * Decodes a GetFunctionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.GetFunctionRequest;

                    /**
                     * Verifies a GetFunctionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetFunctionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetFunctionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.GetFunctionRequest;

                    /**
                     * Creates a plain object from a GetFunctionRequest message. Also converts values to other types if specified.
                     * @param message GetFunctionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.GetFunctionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetFunctionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFunctionsRequest. */
                interface IListFunctionsRequest {

                    /** ListFunctionsRequest parent */
                    parent?: (string|null);

                    /** ListFunctionsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListFunctionsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListFunctionsRequest filter */
                    filter?: (string|null);

                    /** ListFunctionsRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a ListFunctionsRequest. */
                class ListFunctionsRequest implements IListFunctionsRequest {

                    /**
                     * Constructs a new ListFunctionsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.IListFunctionsRequest);

                    /** ListFunctionsRequest parent. */
                    public parent: string;

                    /** ListFunctionsRequest pageSize. */
                    public pageSize: number;

                    /** ListFunctionsRequest pageToken. */
                    public pageToken: string;

                    /** ListFunctionsRequest filter. */
                    public filter: string;

                    /** ListFunctionsRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new ListFunctionsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFunctionsRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.IListFunctionsRequest): google.cloud.functions.v2beta.ListFunctionsRequest;

                    /**
                     * Encodes the specified ListFunctionsRequest message. Does not implicitly {@link google.cloud.functions.v2beta.ListFunctionsRequest.verify|verify} messages.
                     * @param message ListFunctionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.IListFunctionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFunctionsRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.ListFunctionsRequest.verify|verify} messages.
                     * @param message ListFunctionsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.IListFunctionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFunctionsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFunctionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.ListFunctionsRequest;

                    /**
                     * Decodes a ListFunctionsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFunctionsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.ListFunctionsRequest;

                    /**
                     * Verifies a ListFunctionsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFunctionsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFunctionsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.ListFunctionsRequest;

                    /**
                     * Creates a plain object from a ListFunctionsRequest message. Also converts values to other types if specified.
                     * @param message ListFunctionsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.ListFunctionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFunctionsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFunctionsResponse. */
                interface IListFunctionsResponse {

                    /** ListFunctionsResponse functions */
                    functions?: (google.cloud.functions.v2beta.IFunction[]|null);

                    /** ListFunctionsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListFunctionsResponse unreachable */
                    unreachable?: (string[]|null);
                }

                /** Represents a ListFunctionsResponse. */
                class ListFunctionsResponse implements IListFunctionsResponse {

                    /**
                     * Constructs a new ListFunctionsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.IListFunctionsResponse);

                    /** ListFunctionsResponse functions. */
                    public functions: google.cloud.functions.v2beta.IFunction[];

                    /** ListFunctionsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListFunctionsResponse unreachable. */
                    public unreachable: string[];

                    /**
                     * Creates a new ListFunctionsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFunctionsResponse instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.IListFunctionsResponse): google.cloud.functions.v2beta.ListFunctionsResponse;

                    /**
                     * Encodes the specified ListFunctionsResponse message. Does not implicitly {@link google.cloud.functions.v2beta.ListFunctionsResponse.verify|verify} messages.
                     * @param message ListFunctionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.IListFunctionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFunctionsResponse message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.ListFunctionsResponse.verify|verify} messages.
                     * @param message ListFunctionsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.IListFunctionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFunctionsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFunctionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.ListFunctionsResponse;

                    /**
                     * Decodes a ListFunctionsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFunctionsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.ListFunctionsResponse;

                    /**
                     * Verifies a ListFunctionsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFunctionsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFunctionsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.ListFunctionsResponse;

                    /**
                     * Creates a plain object from a ListFunctionsResponse message. Also converts values to other types if specified.
                     * @param message ListFunctionsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.ListFunctionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFunctionsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateFunctionRequest. */
                interface ICreateFunctionRequest {

                    /** CreateFunctionRequest parent */
                    parent?: (string|null);

                    /** CreateFunctionRequest function */
                    "function"?: (google.cloud.functions.v2beta.IFunction|null);

                    /** CreateFunctionRequest functionId */
                    functionId?: (string|null);
                }

                /** Represents a CreateFunctionRequest. */
                class CreateFunctionRequest implements ICreateFunctionRequest {

                    /**
                     * Constructs a new CreateFunctionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.ICreateFunctionRequest);

                    /** CreateFunctionRequest parent. */
                    public parent: string;

                    /** CreateFunctionRequest function. */
                    public function?: (google.cloud.functions.v2beta.IFunction|null);

                    /** CreateFunctionRequest functionId. */
                    public functionId: string;

                    /**
                     * Creates a new CreateFunctionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateFunctionRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.ICreateFunctionRequest): google.cloud.functions.v2beta.CreateFunctionRequest;

                    /**
                     * Encodes the specified CreateFunctionRequest message. Does not implicitly {@link google.cloud.functions.v2beta.CreateFunctionRequest.verify|verify} messages.
                     * @param message CreateFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.ICreateFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateFunctionRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.CreateFunctionRequest.verify|verify} messages.
                     * @param message CreateFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.ICreateFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateFunctionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.CreateFunctionRequest;

                    /**
                     * Decodes a CreateFunctionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.CreateFunctionRequest;

                    /**
                     * Verifies a CreateFunctionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateFunctionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateFunctionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.CreateFunctionRequest;

                    /**
                     * Creates a plain object from a CreateFunctionRequest message. Also converts values to other types if specified.
                     * @param message CreateFunctionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.CreateFunctionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateFunctionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateFunctionRequest. */
                interface IUpdateFunctionRequest {

                    /** UpdateFunctionRequest function */
                    "function"?: (google.cloud.functions.v2beta.IFunction|null);

                    /** UpdateFunctionRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateFunctionRequest. */
                class UpdateFunctionRequest implements IUpdateFunctionRequest {

                    /**
                     * Constructs a new UpdateFunctionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.IUpdateFunctionRequest);

                    /** UpdateFunctionRequest function. */
                    public function?: (google.cloud.functions.v2beta.IFunction|null);

                    /** UpdateFunctionRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateFunctionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateFunctionRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.IUpdateFunctionRequest): google.cloud.functions.v2beta.UpdateFunctionRequest;

                    /**
                     * Encodes the specified UpdateFunctionRequest message. Does not implicitly {@link google.cloud.functions.v2beta.UpdateFunctionRequest.verify|verify} messages.
                     * @param message UpdateFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.IUpdateFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateFunctionRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.UpdateFunctionRequest.verify|verify} messages.
                     * @param message UpdateFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.IUpdateFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateFunctionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.UpdateFunctionRequest;

                    /**
                     * Decodes an UpdateFunctionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.UpdateFunctionRequest;

                    /**
                     * Verifies an UpdateFunctionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateFunctionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateFunctionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.UpdateFunctionRequest;

                    /**
                     * Creates a plain object from an UpdateFunctionRequest message. Also converts values to other types if specified.
                     * @param message UpdateFunctionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.UpdateFunctionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateFunctionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteFunctionRequest. */
                interface IDeleteFunctionRequest {

                    /** DeleteFunctionRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteFunctionRequest. */
                class DeleteFunctionRequest implements IDeleteFunctionRequest {

                    /**
                     * Constructs a new DeleteFunctionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.IDeleteFunctionRequest);

                    /** DeleteFunctionRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteFunctionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteFunctionRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.IDeleteFunctionRequest): google.cloud.functions.v2beta.DeleteFunctionRequest;

                    /**
                     * Encodes the specified DeleteFunctionRequest message. Does not implicitly {@link google.cloud.functions.v2beta.DeleteFunctionRequest.verify|verify} messages.
                     * @param message DeleteFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.IDeleteFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteFunctionRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.DeleteFunctionRequest.verify|verify} messages.
                     * @param message DeleteFunctionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.IDeleteFunctionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteFunctionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.DeleteFunctionRequest;

                    /**
                     * Decodes a DeleteFunctionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteFunctionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.DeleteFunctionRequest;

                    /**
                     * Verifies a DeleteFunctionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteFunctionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteFunctionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.DeleteFunctionRequest;

                    /**
                     * Creates a plain object from a DeleteFunctionRequest message. Also converts values to other types if specified.
                     * @param message DeleteFunctionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.DeleteFunctionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteFunctionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GenerateUploadUrlRequest. */
                interface IGenerateUploadUrlRequest {

                    /** GenerateUploadUrlRequest parent */
                    parent?: (string|null);
                }

                /** Represents a GenerateUploadUrlRequest. */
                class GenerateUploadUrlRequest implements IGenerateUploadUrlRequest {

                    /**
                     * Constructs a new GenerateUploadUrlRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.IGenerateUploadUrlRequest);

                    /** GenerateUploadUrlRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new GenerateUploadUrlRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateUploadUrlRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.IGenerateUploadUrlRequest): google.cloud.functions.v2beta.GenerateUploadUrlRequest;

                    /**
                     * Encodes the specified GenerateUploadUrlRequest message. Does not implicitly {@link google.cloud.functions.v2beta.GenerateUploadUrlRequest.verify|verify} messages.
                     * @param message GenerateUploadUrlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.IGenerateUploadUrlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateUploadUrlRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.GenerateUploadUrlRequest.verify|verify} messages.
                     * @param message GenerateUploadUrlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.IGenerateUploadUrlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateUploadUrlRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateUploadUrlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.GenerateUploadUrlRequest;

                    /**
                     * Decodes a GenerateUploadUrlRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateUploadUrlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.GenerateUploadUrlRequest;

                    /**
                     * Verifies a GenerateUploadUrlRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateUploadUrlRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateUploadUrlRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.GenerateUploadUrlRequest;

                    /**
                     * Creates a plain object from a GenerateUploadUrlRequest message. Also converts values to other types if specified.
                     * @param message GenerateUploadUrlRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.GenerateUploadUrlRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateUploadUrlRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GenerateUploadUrlResponse. */
                interface IGenerateUploadUrlResponse {

                    /** GenerateUploadUrlResponse uploadUrl */
                    uploadUrl?: (string|null);

                    /** GenerateUploadUrlResponse storageSource */
                    storageSource?: (google.cloud.functions.v2beta.IStorageSource|null);
                }

                /** Represents a GenerateUploadUrlResponse. */
                class GenerateUploadUrlResponse implements IGenerateUploadUrlResponse {

                    /**
                     * Constructs a new GenerateUploadUrlResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.IGenerateUploadUrlResponse);

                    /** GenerateUploadUrlResponse uploadUrl. */
                    public uploadUrl: string;

                    /** GenerateUploadUrlResponse storageSource. */
                    public storageSource?: (google.cloud.functions.v2beta.IStorageSource|null);

                    /**
                     * Creates a new GenerateUploadUrlResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateUploadUrlResponse instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.IGenerateUploadUrlResponse): google.cloud.functions.v2beta.GenerateUploadUrlResponse;

                    /**
                     * Encodes the specified GenerateUploadUrlResponse message. Does not implicitly {@link google.cloud.functions.v2beta.GenerateUploadUrlResponse.verify|verify} messages.
                     * @param message GenerateUploadUrlResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.IGenerateUploadUrlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateUploadUrlResponse message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.GenerateUploadUrlResponse.verify|verify} messages.
                     * @param message GenerateUploadUrlResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.IGenerateUploadUrlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateUploadUrlResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateUploadUrlResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.GenerateUploadUrlResponse;

                    /**
                     * Decodes a GenerateUploadUrlResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateUploadUrlResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.GenerateUploadUrlResponse;

                    /**
                     * Verifies a GenerateUploadUrlResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateUploadUrlResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateUploadUrlResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.GenerateUploadUrlResponse;

                    /**
                     * Creates a plain object from a GenerateUploadUrlResponse message. Also converts values to other types if specified.
                     * @param message GenerateUploadUrlResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.GenerateUploadUrlResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateUploadUrlResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GenerateDownloadUrlRequest. */
                interface IGenerateDownloadUrlRequest {

                    /** GenerateDownloadUrlRequest name */
                    name?: (string|null);
                }

                /** Represents a GenerateDownloadUrlRequest. */
                class GenerateDownloadUrlRequest implements IGenerateDownloadUrlRequest {

                    /**
                     * Constructs a new GenerateDownloadUrlRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.IGenerateDownloadUrlRequest);

                    /** GenerateDownloadUrlRequest name. */
                    public name: string;

                    /**
                     * Creates a new GenerateDownloadUrlRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateDownloadUrlRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.IGenerateDownloadUrlRequest): google.cloud.functions.v2beta.GenerateDownloadUrlRequest;

                    /**
                     * Encodes the specified GenerateDownloadUrlRequest message. Does not implicitly {@link google.cloud.functions.v2beta.GenerateDownloadUrlRequest.verify|verify} messages.
                     * @param message GenerateDownloadUrlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.IGenerateDownloadUrlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateDownloadUrlRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.GenerateDownloadUrlRequest.verify|verify} messages.
                     * @param message GenerateDownloadUrlRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.IGenerateDownloadUrlRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateDownloadUrlRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateDownloadUrlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.GenerateDownloadUrlRequest;

                    /**
                     * Decodes a GenerateDownloadUrlRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateDownloadUrlRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.GenerateDownloadUrlRequest;

                    /**
                     * Verifies a GenerateDownloadUrlRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateDownloadUrlRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateDownloadUrlRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.GenerateDownloadUrlRequest;

                    /**
                     * Creates a plain object from a GenerateDownloadUrlRequest message. Also converts values to other types if specified.
                     * @param message GenerateDownloadUrlRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.GenerateDownloadUrlRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateDownloadUrlRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GenerateDownloadUrlResponse. */
                interface IGenerateDownloadUrlResponse {

                    /** GenerateDownloadUrlResponse downloadUrl */
                    downloadUrl?: (string|null);
                }

                /** Represents a GenerateDownloadUrlResponse. */
                class GenerateDownloadUrlResponse implements IGenerateDownloadUrlResponse {

                    /**
                     * Constructs a new GenerateDownloadUrlResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.IGenerateDownloadUrlResponse);

                    /** GenerateDownloadUrlResponse downloadUrl. */
                    public downloadUrl: string;

                    /**
                     * Creates a new GenerateDownloadUrlResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GenerateDownloadUrlResponse instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.IGenerateDownloadUrlResponse): google.cloud.functions.v2beta.GenerateDownloadUrlResponse;

                    /**
                     * Encodes the specified GenerateDownloadUrlResponse message. Does not implicitly {@link google.cloud.functions.v2beta.GenerateDownloadUrlResponse.verify|verify} messages.
                     * @param message GenerateDownloadUrlResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.IGenerateDownloadUrlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GenerateDownloadUrlResponse message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.GenerateDownloadUrlResponse.verify|verify} messages.
                     * @param message GenerateDownloadUrlResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.IGenerateDownloadUrlResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GenerateDownloadUrlResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GenerateDownloadUrlResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.GenerateDownloadUrlResponse;

                    /**
                     * Decodes a GenerateDownloadUrlResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GenerateDownloadUrlResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.GenerateDownloadUrlResponse;

                    /**
                     * Verifies a GenerateDownloadUrlResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GenerateDownloadUrlResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GenerateDownloadUrlResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.GenerateDownloadUrlResponse;

                    /**
                     * Creates a plain object from a GenerateDownloadUrlResponse message. Also converts values to other types if specified.
                     * @param message GenerateDownloadUrlResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.GenerateDownloadUrlResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GenerateDownloadUrlResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListRuntimesRequest. */
                interface IListRuntimesRequest {

                    /** ListRuntimesRequest parent */
                    parent?: (string|null);

                    /** ListRuntimesRequest filter */
                    filter?: (string|null);
                }

                /** Represents a ListRuntimesRequest. */
                class ListRuntimesRequest implements IListRuntimesRequest {

                    /**
                     * Constructs a new ListRuntimesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.IListRuntimesRequest);

                    /** ListRuntimesRequest parent. */
                    public parent: string;

                    /** ListRuntimesRequest filter. */
                    public filter: string;

                    /**
                     * Creates a new ListRuntimesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRuntimesRequest instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.IListRuntimesRequest): google.cloud.functions.v2beta.ListRuntimesRequest;

                    /**
                     * Encodes the specified ListRuntimesRequest message. Does not implicitly {@link google.cloud.functions.v2beta.ListRuntimesRequest.verify|verify} messages.
                     * @param message ListRuntimesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.IListRuntimesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRuntimesRequest message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.ListRuntimesRequest.verify|verify} messages.
                     * @param message ListRuntimesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.IListRuntimesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRuntimesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRuntimesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.ListRuntimesRequest;

                    /**
                     * Decodes a ListRuntimesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRuntimesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.ListRuntimesRequest;

                    /**
                     * Verifies a ListRuntimesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRuntimesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRuntimesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.ListRuntimesRequest;

                    /**
                     * Creates a plain object from a ListRuntimesRequest message. Also converts values to other types if specified.
                     * @param message ListRuntimesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.ListRuntimesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRuntimesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListRuntimesResponse. */
                interface IListRuntimesResponse {

                    /** ListRuntimesResponse runtimes */
                    runtimes?: (google.cloud.functions.v2beta.ListRuntimesResponse.IRuntime[]|null);
                }

                /** Represents a ListRuntimesResponse. */
                class ListRuntimesResponse implements IListRuntimesResponse {

                    /**
                     * Constructs a new ListRuntimesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.IListRuntimesResponse);

                    /** ListRuntimesResponse runtimes. */
                    public runtimes: google.cloud.functions.v2beta.ListRuntimesResponse.IRuntime[];

                    /**
                     * Creates a new ListRuntimesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListRuntimesResponse instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.IListRuntimesResponse): google.cloud.functions.v2beta.ListRuntimesResponse;

                    /**
                     * Encodes the specified ListRuntimesResponse message. Does not implicitly {@link google.cloud.functions.v2beta.ListRuntimesResponse.verify|verify} messages.
                     * @param message ListRuntimesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.IListRuntimesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListRuntimesResponse message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.ListRuntimesResponse.verify|verify} messages.
                     * @param message ListRuntimesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.IListRuntimesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListRuntimesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListRuntimesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.ListRuntimesResponse;

                    /**
                     * Decodes a ListRuntimesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListRuntimesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.ListRuntimesResponse;

                    /**
                     * Verifies a ListRuntimesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListRuntimesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListRuntimesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.ListRuntimesResponse;

                    /**
                     * Creates a plain object from a ListRuntimesResponse message. Also converts values to other types if specified.
                     * @param message ListRuntimesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.ListRuntimesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListRuntimesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ListRuntimesResponse {

                    /** Properties of a Runtime. */
                    interface IRuntime {

                        /** Runtime name */
                        name?: (string|null);

                        /** Runtime displayName */
                        displayName?: (string|null);

                        /** Runtime stage */
                        stage?: (google.cloud.functions.v2beta.ListRuntimesResponse.RuntimeStage|keyof typeof google.cloud.functions.v2beta.ListRuntimesResponse.RuntimeStage|null);

                        /** Runtime warnings */
                        warnings?: (string[]|null);

                        /** Runtime environment */
                        environment?: (google.cloud.functions.v2beta.Environment|keyof typeof google.cloud.functions.v2beta.Environment|null);
                    }

                    /** Represents a Runtime. */
                    class Runtime implements IRuntime {

                        /**
                         * Constructs a new Runtime.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.functions.v2beta.ListRuntimesResponse.IRuntime);

                        /** Runtime name. */
                        public name: string;

                        /** Runtime displayName. */
                        public displayName: string;

                        /** Runtime stage. */
                        public stage: (google.cloud.functions.v2beta.ListRuntimesResponse.RuntimeStage|keyof typeof google.cloud.functions.v2beta.ListRuntimesResponse.RuntimeStage);

                        /** Runtime warnings. */
                        public warnings: string[];

                        /** Runtime environment. */
                        public environment: (google.cloud.functions.v2beta.Environment|keyof typeof google.cloud.functions.v2beta.Environment);

                        /**
                         * Creates a new Runtime instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Runtime instance
                         */
                        public static create(properties?: google.cloud.functions.v2beta.ListRuntimesResponse.IRuntime): google.cloud.functions.v2beta.ListRuntimesResponse.Runtime;

                        /**
                         * Encodes the specified Runtime message. Does not implicitly {@link google.cloud.functions.v2beta.ListRuntimesResponse.Runtime.verify|verify} messages.
                         * @param message Runtime message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.functions.v2beta.ListRuntimesResponse.IRuntime, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Runtime message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.ListRuntimesResponse.Runtime.verify|verify} messages.
                         * @param message Runtime message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.functions.v2beta.ListRuntimesResponse.IRuntime, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Runtime message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Runtime
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.ListRuntimesResponse.Runtime;

                        /**
                         * Decodes a Runtime message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Runtime
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.ListRuntimesResponse.Runtime;

                        /**
                         * Verifies a Runtime message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Runtime message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Runtime
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.ListRuntimesResponse.Runtime;

                        /**
                         * Creates a plain object from a Runtime message. Also converts values to other types if specified.
                         * @param message Runtime
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.functions.v2beta.ListRuntimesResponse.Runtime, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Runtime to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** RuntimeStage enum. */
                    enum RuntimeStage {
                        RUNTIME_STAGE_UNSPECIFIED = 0,
                        DEVELOPMENT = 1,
                        ALPHA = 2,
                        BETA = 3,
                        GA = 4,
                        DEPRECATED = 5,
                        DECOMMISSIONED = 6
                    }
                }

                /** Properties of an OperationMetadata. */
                interface IOperationMetadata {

                    /** OperationMetadata createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target */
                    target?: (string|null);

                    /** OperationMetadata verb */
                    verb?: (string|null);

                    /** OperationMetadata statusDetail */
                    statusDetail?: (string|null);

                    /** OperationMetadata cancelRequested */
                    cancelRequested?: (boolean|null);

                    /** OperationMetadata apiVersion */
                    apiVersion?: (string|null);

                    /** OperationMetadata requestResource */
                    requestResource?: (google.protobuf.IAny|null);

                    /** OperationMetadata stages */
                    stages?: (google.cloud.functions.v2beta.IStage[]|null);
                }

                /** Represents an OperationMetadata. */
                class OperationMetadata implements IOperationMetadata {

                    /**
                     * Constructs a new OperationMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.IOperationMetadata);

                    /** OperationMetadata createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** OperationMetadata target. */
                    public target: string;

                    /** OperationMetadata verb. */
                    public verb: string;

                    /** OperationMetadata statusDetail. */
                    public statusDetail: string;

                    /** OperationMetadata cancelRequested. */
                    public cancelRequested: boolean;

                    /** OperationMetadata apiVersion. */
                    public apiVersion: string;

                    /** OperationMetadata requestResource. */
                    public requestResource?: (google.protobuf.IAny|null);

                    /** OperationMetadata stages. */
                    public stages: google.cloud.functions.v2beta.IStage[];

                    /**
                     * Creates a new OperationMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OperationMetadata instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.IOperationMetadata): google.cloud.functions.v2beta.OperationMetadata;

                    /**
                     * Encodes the specified OperationMetadata message. Does not implicitly {@link google.cloud.functions.v2beta.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OperationMetadata message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.OperationMetadata.verify|verify} messages.
                     * @param message OperationMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.IOperationMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.OperationMetadata;

                    /**
                     * Decodes an OperationMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OperationMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.OperationMetadata;

                    /**
                     * Verifies an OperationMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OperationMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OperationMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.OperationMetadata;

                    /**
                     * Creates a plain object from an OperationMetadata message. Also converts values to other types if specified.
                     * @param message OperationMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.OperationMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OperationMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Stage. */
                interface IStage {

                    /** Stage name */
                    name?: (google.cloud.functions.v2beta.Stage.Name|keyof typeof google.cloud.functions.v2beta.Stage.Name|null);

                    /** Stage message */
                    message?: (string|null);

                    /** Stage state */
                    state?: (google.cloud.functions.v2beta.Stage.State|keyof typeof google.cloud.functions.v2beta.Stage.State|null);

                    /** Stage resource */
                    resource?: (string|null);

                    /** Stage resourceUri */
                    resourceUri?: (string|null);

                    /** Stage stateMessages */
                    stateMessages?: (google.cloud.functions.v2beta.IStateMessage[]|null);
                }

                /** Represents a Stage. */
                class Stage implements IStage {

                    /**
                     * Constructs a new Stage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.functions.v2beta.IStage);

                    /** Stage name. */
                    public name: (google.cloud.functions.v2beta.Stage.Name|keyof typeof google.cloud.functions.v2beta.Stage.Name);

                    /** Stage message. */
                    public message: string;

                    /** Stage state. */
                    public state: (google.cloud.functions.v2beta.Stage.State|keyof typeof google.cloud.functions.v2beta.Stage.State);

                    /** Stage resource. */
                    public resource: string;

                    /** Stage resourceUri. */
                    public resourceUri: string;

                    /** Stage stateMessages. */
                    public stateMessages: google.cloud.functions.v2beta.IStateMessage[];

                    /**
                     * Creates a new Stage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Stage instance
                     */
                    public static create(properties?: google.cloud.functions.v2beta.IStage): google.cloud.functions.v2beta.Stage;

                    /**
                     * Encodes the specified Stage message. Does not implicitly {@link google.cloud.functions.v2beta.Stage.verify|verify} messages.
                     * @param message Stage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.functions.v2beta.IStage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Stage message, length delimited. Does not implicitly {@link google.cloud.functions.v2beta.Stage.verify|verify} messages.
                     * @param message Stage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.functions.v2beta.IStage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Stage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Stage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.functions.v2beta.Stage;

                    /**
                     * Decodes a Stage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Stage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.functions.v2beta.Stage;

                    /**
                     * Verifies a Stage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Stage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Stage
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.functions.v2beta.Stage;

                    /**
                     * Creates a plain object from a Stage message. Also converts values to other types if specified.
                     * @param message Stage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.functions.v2beta.Stage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Stage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Stage {

                    /** Name enum. */
                    enum Name {
                        NAME_UNSPECIFIED = 0,
                        ARTIFACT_REGISTRY = 1,
                        BUILD = 2,
                        SERVICE = 3,
                        TRIGGER = 4,
                        SERVICE_ROLLBACK = 5,
                        TRIGGER_ROLLBACK = 6
                    }

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        NOT_STARTED = 1,
                        IN_PROGRESS = 2,
                        COMPLETE = 3
                    }
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5,
            UNORDERED_LIST = 6,
            NON_EMPTY_DEFAULT = 7
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);

            /** ResourceDescriptor style */
            style?: (google.api.ResourceDescriptor.Style[]|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /** ResourceDescriptor style. */
            public style: google.api.ResourceDescriptor.Style[];

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }

            /** Style enum. */
            enum Style {
                STYLE_UNSPECIFIED = 0,
                DECLARATIVE_FRIENDLY = 1
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);

            /** MethodOptions .google.longrunning.operationInfo */
            ".google.longrunning.operationInfo"?: (google.longrunning.IOperationInfo|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|string|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: (Uint8Array|string);

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace iam. */
    namespace iam {

        /** Namespace v1. */
        namespace v1 {

            /** Represents a IAMPolicy */
            class IAMPolicy extends $protobuf.rpc.Service {

                /**
                 * Constructs a new IAMPolicy service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new IAMPolicy service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): IAMPolicy;

                /**
                 * Calls SetIamPolicy.
                 * @param request SetIamPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Policy
                 */
                public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.iam.v1.IAMPolicy.SetIamPolicyCallback): void;

                /**
                 * Calls SetIamPolicy.
                 * @param request SetIamPolicyRequest message or plain object
                 * @returns Promise
                 */
                public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                /**
                 * Calls GetIamPolicy.
                 * @param request GetIamPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Policy
                 */
                public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.iam.v1.IAMPolicy.GetIamPolicyCallback): void;

                /**
                 * Calls GetIamPolicy.
                 * @param request GetIamPolicyRequest message or plain object
                 * @returns Promise
                 */
                public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                /**
                 * Calls TestIamPermissions.
                 * @param request TestIamPermissionsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                 */
                public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.iam.v1.IAMPolicy.TestIamPermissionsCallback): void;

                /**
                 * Calls TestIamPermissions.
                 * @param request TestIamPermissionsRequest message or plain object
                 * @returns Promise
                 */
                public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;
            }

            namespace IAMPolicy {

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy#setIamPolicy}.
                 * @param error Error, if any
                 * @param [response] Policy
                 */
                type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy#getIamPolicy}.
                 * @param error Error, if any
                 * @param [response] Policy
                 */
                type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy#testIamPermissions}.
                 * @param error Error, if any
                 * @param [response] TestIamPermissionsResponse
                 */
                type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;
            }

            /** Properties of a SetIamPolicyRequest. */
            interface ISetIamPolicyRequest {

                /** SetIamPolicyRequest resource */
                resource?: (string|null);

                /** SetIamPolicyRequest policy */
                policy?: (google.iam.v1.IPolicy|null);
            }

            /** Represents a SetIamPolicyRequest. */
            class SetIamPolicyRequest implements ISetIamPolicyRequest {

                /**
                 * Constructs a new SetIamPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ISetIamPolicyRequest);

                /** SetIamPolicyRequest resource. */
                public resource: string;

                /** SetIamPolicyRequest policy. */
                public policy?: (google.iam.v1.IPolicy|null);

                /**
                 * Creates a new SetIamPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetIamPolicyRequest instance
                 */
                public static create(properties?: google.iam.v1.ISetIamPolicyRequest): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Encodes the specified SetIamPolicyRequest message. Does not implicitly {@link google.iam.v1.SetIamPolicyRequest.verify|verify} messages.
                 * @param message SetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ISetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetIamPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v1.SetIamPolicyRequest.verify|verify} messages.
                 * @param message SetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ISetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetIamPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Decodes a SetIamPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Verifies a SetIamPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetIamPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetIamPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Creates a plain object from a SetIamPolicyRequest message. Also converts values to other types if specified.
                 * @param message SetIamPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.SetIamPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetIamPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetIamPolicyRequest. */
            interface IGetIamPolicyRequest {

                /** GetIamPolicyRequest resource */
                resource?: (string|null);

                /** GetIamPolicyRequest options */
                options?: (google.iam.v1.IGetPolicyOptions|null);
            }

            /** Represents a GetIamPolicyRequest. */
            class GetIamPolicyRequest implements IGetIamPolicyRequest {

                /**
                 * Constructs a new GetIamPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IGetIamPolicyRequest);

                /** GetIamPolicyRequest resource. */
                public resource: string;

                /** GetIamPolicyRequest options. */
                public options?: (google.iam.v1.IGetPolicyOptions|null);

                /**
                 * Creates a new GetIamPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetIamPolicyRequest instance
                 */
                public static create(properties?: google.iam.v1.IGetIamPolicyRequest): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Encodes the specified GetIamPolicyRequest message. Does not implicitly {@link google.iam.v1.GetIamPolicyRequest.verify|verify} messages.
                 * @param message GetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IGetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetIamPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v1.GetIamPolicyRequest.verify|verify} messages.
                 * @param message GetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IGetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetIamPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Decodes a GetIamPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Verifies a GetIamPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetIamPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetIamPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Creates a plain object from a GetIamPolicyRequest message. Also converts values to other types if specified.
                 * @param message GetIamPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.GetIamPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetIamPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TestIamPermissionsRequest. */
            interface ITestIamPermissionsRequest {

                /** TestIamPermissionsRequest resource */
                resource?: (string|null);

                /** TestIamPermissionsRequest permissions */
                permissions?: (string[]|null);
            }

            /** Represents a TestIamPermissionsRequest. */
            class TestIamPermissionsRequest implements ITestIamPermissionsRequest {

                /**
                 * Constructs a new TestIamPermissionsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ITestIamPermissionsRequest);

                /** TestIamPermissionsRequest resource. */
                public resource: string;

                /** TestIamPermissionsRequest permissions. */
                public permissions: string[];

                /**
                 * Creates a new TestIamPermissionsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestIamPermissionsRequest instance
                 */
                public static create(properties?: google.iam.v1.ITestIamPermissionsRequest): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Encodes the specified TestIamPermissionsRequest message. Does not implicitly {@link google.iam.v1.TestIamPermissionsRequest.verify|verify} messages.
                 * @param message TestIamPermissionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ITestIamPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestIamPermissionsRequest message, length delimited. Does not implicitly {@link google.iam.v1.TestIamPermissionsRequest.verify|verify} messages.
                 * @param message TestIamPermissionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ITestIamPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestIamPermissionsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TestIamPermissionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Decodes a TestIamPermissionsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TestIamPermissionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Verifies a TestIamPermissionsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestIamPermissionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestIamPermissionsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Creates a plain object from a TestIamPermissionsRequest message. Also converts values to other types if specified.
                 * @param message TestIamPermissionsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.TestIamPermissionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestIamPermissionsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TestIamPermissionsResponse. */
            interface ITestIamPermissionsResponse {

                /** TestIamPermissionsResponse permissions */
                permissions?: (string[]|null);
            }

            /** Represents a TestIamPermissionsResponse. */
            class TestIamPermissionsResponse implements ITestIamPermissionsResponse {

                /**
                 * Constructs a new TestIamPermissionsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ITestIamPermissionsResponse);

                /** TestIamPermissionsResponse permissions. */
                public permissions: string[];

                /**
                 * Creates a new TestIamPermissionsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestIamPermissionsResponse instance
                 */
                public static create(properties?: google.iam.v1.ITestIamPermissionsResponse): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Encodes the specified TestIamPermissionsResponse message. Does not implicitly {@link google.iam.v1.TestIamPermissionsResponse.verify|verify} messages.
                 * @param message TestIamPermissionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ITestIamPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestIamPermissionsResponse message, length delimited. Does not implicitly {@link google.iam.v1.TestIamPermissionsResponse.verify|verify} messages.
                 * @param message TestIamPermissionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ITestIamPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestIamPermissionsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TestIamPermissionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Decodes a TestIamPermissionsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TestIamPermissionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Verifies a TestIamPermissionsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestIamPermissionsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestIamPermissionsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Creates a plain object from a TestIamPermissionsResponse message. Also converts values to other types if specified.
                 * @param message TestIamPermissionsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.TestIamPermissionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestIamPermissionsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetPolicyOptions. */
            interface IGetPolicyOptions {

                /** GetPolicyOptions requestedPolicyVersion */
                requestedPolicyVersion?: (number|null);
            }

            /** Represents a GetPolicyOptions. */
            class GetPolicyOptions implements IGetPolicyOptions {

                /**
                 * Constructs a new GetPolicyOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IGetPolicyOptions);

                /** GetPolicyOptions requestedPolicyVersion. */
                public requestedPolicyVersion: number;

                /**
                 * Creates a new GetPolicyOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetPolicyOptions instance
                 */
                public static create(properties?: google.iam.v1.IGetPolicyOptions): google.iam.v1.GetPolicyOptions;

                /**
                 * Encodes the specified GetPolicyOptions message. Does not implicitly {@link google.iam.v1.GetPolicyOptions.verify|verify} messages.
                 * @param message GetPolicyOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IGetPolicyOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetPolicyOptions message, length delimited. Does not implicitly {@link google.iam.v1.GetPolicyOptions.verify|verify} messages.
                 * @param message GetPolicyOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IGetPolicyOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetPolicyOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetPolicyOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.GetPolicyOptions;

                /**
                 * Decodes a GetPolicyOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetPolicyOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.GetPolicyOptions;

                /**
                 * Verifies a GetPolicyOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetPolicyOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetPolicyOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.GetPolicyOptions;

                /**
                 * Creates a plain object from a GetPolicyOptions message. Also converts values to other types if specified.
                 * @param message GetPolicyOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.GetPolicyOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetPolicyOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Policy. */
            interface IPolicy {

                /** Policy version */
                version?: (number|null);

                /** Policy bindings */
                bindings?: (google.iam.v1.IBinding[]|null);

                /** Policy etag */
                etag?: (Uint8Array|string|null);
            }

            /** Represents a Policy. */
            class Policy implements IPolicy {

                /**
                 * Constructs a new Policy.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IPolicy);

                /** Policy version. */
                public version: number;

                /** Policy bindings. */
                public bindings: google.iam.v1.IBinding[];

                /** Policy etag. */
                public etag: (Uint8Array|string);

                /**
                 * Creates a new Policy instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Policy instance
                 */
                public static create(properties?: google.iam.v1.IPolicy): google.iam.v1.Policy;

                /**
                 * Encodes the specified Policy message. Does not implicitly {@link google.iam.v1.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Policy message, length delimited. Does not implicitly {@link google.iam.v1.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Policy message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.Policy;

                /**
                 * Decodes a Policy message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.Policy;

                /**
                 * Verifies a Policy message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Policy message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Policy
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.Policy;

                /**
                 * Creates a plain object from a Policy message. Also converts values to other types if specified.
                 * @param message Policy
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Policy to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Binding. */
            interface IBinding {

                /** Binding role */
                role?: (string|null);

                /** Binding members */
                members?: (string[]|null);

                /** Binding condition */
                condition?: (google.type.IExpr|null);
            }

            /** Represents a Binding. */
            class Binding implements IBinding {

                /**
                 * Constructs a new Binding.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IBinding);

                /** Binding role. */
                public role: string;

                /** Binding members. */
                public members: string[];

                /** Binding condition. */
                public condition?: (google.type.IExpr|null);

                /**
                 * Creates a new Binding instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Binding instance
                 */
                public static create(properties?: google.iam.v1.IBinding): google.iam.v1.Binding;

                /**
                 * Encodes the specified Binding message. Does not implicitly {@link google.iam.v1.Binding.verify|verify} messages.
                 * @param message Binding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Binding message, length delimited. Does not implicitly {@link google.iam.v1.Binding.verify|verify} messages.
                 * @param message Binding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Binding message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Binding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.Binding;

                /**
                 * Decodes a Binding message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Binding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.Binding;

                /**
                 * Verifies a Binding message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Binding message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Binding
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.Binding;

                /**
                 * Creates a plain object from a Binding message. Also converts values to other types if specified.
                 * @param message Binding
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.Binding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Binding to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PolicyDelta. */
            interface IPolicyDelta {

                /** PolicyDelta bindingDeltas */
                bindingDeltas?: (google.iam.v1.IBindingDelta[]|null);

                /** PolicyDelta auditConfigDeltas */
                auditConfigDeltas?: (google.iam.v1.IAuditConfigDelta[]|null);
            }

            /** Represents a PolicyDelta. */
            class PolicyDelta implements IPolicyDelta {

                /**
                 * Constructs a new PolicyDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IPolicyDelta);

                /** PolicyDelta bindingDeltas. */
                public bindingDeltas: google.iam.v1.IBindingDelta[];

                /** PolicyDelta auditConfigDeltas. */
                public auditConfigDeltas: google.iam.v1.IAuditConfigDelta[];

                /**
                 * Creates a new PolicyDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PolicyDelta instance
                 */
                public static create(properties?: google.iam.v1.IPolicyDelta): google.iam.v1.PolicyDelta;

                /**
                 * Encodes the specified PolicyDelta message. Does not implicitly {@link google.iam.v1.PolicyDelta.verify|verify} messages.
                 * @param message PolicyDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IPolicyDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PolicyDelta message, length delimited. Does not implicitly {@link google.iam.v1.PolicyDelta.verify|verify} messages.
                 * @param message PolicyDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IPolicyDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PolicyDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PolicyDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.PolicyDelta;

                /**
                 * Decodes a PolicyDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PolicyDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.PolicyDelta;

                /**
                 * Verifies a PolicyDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PolicyDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PolicyDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.PolicyDelta;

                /**
                 * Creates a plain object from a PolicyDelta message. Also converts values to other types if specified.
                 * @param message PolicyDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.PolicyDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PolicyDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a BindingDelta. */
            interface IBindingDelta {

                /** BindingDelta action */
                action?: (google.iam.v1.BindingDelta.Action|keyof typeof google.iam.v1.BindingDelta.Action|null);

                /** BindingDelta role */
                role?: (string|null);

                /** BindingDelta member */
                member?: (string|null);

                /** BindingDelta condition */
                condition?: (google.type.IExpr|null);
            }

            /** Represents a BindingDelta. */
            class BindingDelta implements IBindingDelta {

                /**
                 * Constructs a new BindingDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IBindingDelta);

                /** BindingDelta action. */
                public action: (google.iam.v1.BindingDelta.Action|keyof typeof google.iam.v1.BindingDelta.Action);

                /** BindingDelta role. */
                public role: string;

                /** BindingDelta member. */
                public member: string;

                /** BindingDelta condition. */
                public condition?: (google.type.IExpr|null);

                /**
                 * Creates a new BindingDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BindingDelta instance
                 */
                public static create(properties?: google.iam.v1.IBindingDelta): google.iam.v1.BindingDelta;

                /**
                 * Encodes the specified BindingDelta message. Does not implicitly {@link google.iam.v1.BindingDelta.verify|verify} messages.
                 * @param message BindingDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IBindingDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BindingDelta message, length delimited. Does not implicitly {@link google.iam.v1.BindingDelta.verify|verify} messages.
                 * @param message BindingDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IBindingDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BindingDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BindingDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.BindingDelta;

                /**
                 * Decodes a BindingDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BindingDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.BindingDelta;

                /**
                 * Verifies a BindingDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BindingDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BindingDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.BindingDelta;

                /**
                 * Creates a plain object from a BindingDelta message. Also converts values to other types if specified.
                 * @param message BindingDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.BindingDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BindingDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace BindingDelta {

                /** Action enum. */
                enum Action {
                    ACTION_UNSPECIFIED = 0,
                    ADD = 1,
                    REMOVE = 2
                }
            }

            /** Properties of an AuditConfigDelta. */
            interface IAuditConfigDelta {

                /** AuditConfigDelta action */
                action?: (google.iam.v1.AuditConfigDelta.Action|keyof typeof google.iam.v1.AuditConfigDelta.Action|null);

                /** AuditConfigDelta service */
                service?: (string|null);

                /** AuditConfigDelta exemptedMember */
                exemptedMember?: (string|null);

                /** AuditConfigDelta logType */
                logType?: (string|null);
            }

            /** Represents an AuditConfigDelta. */
            class AuditConfigDelta implements IAuditConfigDelta {

                /**
                 * Constructs a new AuditConfigDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IAuditConfigDelta);

                /** AuditConfigDelta action. */
                public action: (google.iam.v1.AuditConfigDelta.Action|keyof typeof google.iam.v1.AuditConfigDelta.Action);

                /** AuditConfigDelta service. */
                public service: string;

                /** AuditConfigDelta exemptedMember. */
                public exemptedMember: string;

                /** AuditConfigDelta logType. */
                public logType: string;

                /**
                 * Creates a new AuditConfigDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditConfigDelta instance
                 */
                public static create(properties?: google.iam.v1.IAuditConfigDelta): google.iam.v1.AuditConfigDelta;

                /**
                 * Encodes the specified AuditConfigDelta message. Does not implicitly {@link google.iam.v1.AuditConfigDelta.verify|verify} messages.
                 * @param message AuditConfigDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IAuditConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditConfigDelta message, length delimited. Does not implicitly {@link google.iam.v1.AuditConfigDelta.verify|verify} messages.
                 * @param message AuditConfigDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IAuditConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditConfigDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditConfigDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.AuditConfigDelta;

                /**
                 * Decodes an AuditConfigDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditConfigDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.AuditConfigDelta;

                /**
                 * Verifies an AuditConfigDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditConfigDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditConfigDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.AuditConfigDelta;

                /**
                 * Creates a plain object from an AuditConfigDelta message. Also converts values to other types if specified.
                 * @param message AuditConfigDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.AuditConfigDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditConfigDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace AuditConfigDelta {

                /** Action enum. */
                enum Action {
                    ACTION_UNSPECIFIED = 0,
                    ADD = 1,
                    REMOVE = 2
                }
            }
        }
    }

    /** Namespace type. */
    namespace type {

        /** Properties of an Expr. */
        interface IExpr {

            /** Expr expression */
            expression?: (string|null);

            /** Expr title */
            title?: (string|null);

            /** Expr description */
            description?: (string|null);

            /** Expr location */
            location?: (string|null);
        }

        /** Represents an Expr. */
        class Expr implements IExpr {

            /**
             * Constructs a new Expr.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IExpr);

            /** Expr expression. */
            public expression: string;

            /** Expr title. */
            public title: string;

            /** Expr description. */
            public description: string;

            /** Expr location. */
            public location: string;

            /**
             * Creates a new Expr instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Expr instance
             */
            public static create(properties?: google.type.IExpr): google.type.Expr;

            /**
             * Encodes the specified Expr message. Does not implicitly {@link google.type.Expr.verify|verify} messages.
             * @param message Expr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IExpr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Expr message, length delimited. Does not implicitly {@link google.type.Expr.verify|verify} messages.
             * @param message Expr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IExpr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Expr message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Expr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Expr;

            /**
             * Decodes an Expr message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Expr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Expr;

            /**
             * Verifies an Expr message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Expr message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Expr
             */
            public static fromObject(object: { [k: string]: any }): google.type.Expr;

            /**
             * Creates a plain object from an Expr message. Also converts values to other types if specified.
             * @param message Expr
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Expr, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Expr to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace longrunning. */
    namespace longrunning {

        /** Represents an Operations */
        class Operations extends $protobuf.rpc.Service {

            /**
             * Constructs a new Operations service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Operations service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Operations;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListOperationsResponse
             */
            public listOperations(request: google.longrunning.IListOperationsRequest, callback: google.longrunning.Operations.ListOperationsCallback): void;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @returns Promise
             */
            public listOperations(request: google.longrunning.IListOperationsRequest): Promise<google.longrunning.ListOperationsResponse>;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public getOperation(request: google.longrunning.IGetOperationRequest, callback: google.longrunning.Operations.GetOperationCallback): void;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @returns Promise
             */
            public getOperation(request: google.longrunning.IGetOperationRequest): Promise<google.longrunning.Operation>;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest, callback: google.longrunning.Operations.DeleteOperationCallback): void;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @returns Promise
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest, callback: google.longrunning.Operations.CancelOperationCallback): void;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @returns Promise
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest, callback: google.longrunning.Operations.WaitOperationCallback): void;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @returns Promise
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest): Promise<google.longrunning.Operation>;
        }

        namespace Operations {

            /**
             * Callback as used by {@link google.longrunning.Operations#listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#waitOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type WaitOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation name */
            name?: (string|null);

            /** Operation metadata */
            metadata?: (google.protobuf.IAny|null);

            /** Operation done */
            done?: (boolean|null);

            /** Operation error */
            error?: (google.rpc.IStatus|null);

            /** Operation response */
            response?: (google.protobuf.IAny|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperation);

            /** Operation name. */
            public name: string;

            /** Operation metadata. */
            public metadata?: (google.protobuf.IAny|null);

            /** Operation done. */
            public done: boolean;

            /** Operation error. */
            public error?: (google.rpc.IStatus|null);

            /** Operation response. */
            public response?: (google.protobuf.IAny|null);

            /** Operation result. */
            public result?: ("error"|"response");

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: google.longrunning.IOperation): google.longrunning.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetOperationRequest. */
        interface IGetOperationRequest {

            /** GetOperationRequest name */
            name?: (string|null);
        }

        /** Represents a GetOperationRequest. */
        class GetOperationRequest implements IGetOperationRequest {

            /**
             * Constructs a new GetOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IGetOperationRequest);

            /** GetOperationRequest name. */
            public name: string;

            /**
             * Creates a new GetOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationRequest instance
             */
            public static create(properties?: google.longrunning.IGetOperationRequest): google.longrunning.GetOperationRequest;

            /**
             * Encodes the specified GetOperationRequest message. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.GetOperationRequest;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.GetOperationRequest;

            /**
             * Verifies a GetOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.GetOperationRequest;

            /**
             * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
             * @param message GetOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.GetOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsRequest. */
        interface IListOperationsRequest {

            /** ListOperationsRequest name */
            name?: (string|null);

            /** ListOperationsRequest filter */
            filter?: (string|null);

            /** ListOperationsRequest pageSize */
            pageSize?: (number|null);

            /** ListOperationsRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListOperationsRequest. */
        class ListOperationsRequest implements IListOperationsRequest {

            /**
             * Constructs a new ListOperationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsRequest);

            /** ListOperationsRequest name. */
            public name: string;

            /** ListOperationsRequest filter. */
            public filter: string;

            /** ListOperationsRequest pageSize. */
            public pageSize: number;

            /** ListOperationsRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListOperationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsRequest instance
             */
            public static create(properties?: google.longrunning.IListOperationsRequest): google.longrunning.ListOperationsRequest;

            /**
             * Encodes the specified ListOperationsRequest message. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsRequest;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsRequest;

            /**
             * Verifies a ListOperationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsRequest;

            /**
             * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
             * @param message ListOperationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsResponse. */
        interface IListOperationsResponse {

            /** ListOperationsResponse operations */
            operations?: (google.longrunning.IOperation[]|null);

            /** ListOperationsResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOperationsResponse. */
        class ListOperationsResponse implements IListOperationsResponse {

            /**
             * Constructs a new ListOperationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsResponse);

            /** ListOperationsResponse operations. */
            public operations: google.longrunning.IOperation[];

            /** ListOperationsResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListOperationsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsResponse instance
             */
            public static create(properties?: google.longrunning.IListOperationsResponse): google.longrunning.ListOperationsResponse;

            /**
             * Encodes the specified ListOperationsResponse message. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsResponse message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsResponse;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsResponse;

            /**
             * Verifies a ListOperationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsResponse
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsResponse;

            /**
             * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
             * @param message ListOperationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CancelOperationRequest. */
        interface ICancelOperationRequest {

            /** CancelOperationRequest name */
            name?: (string|null);
        }

        /** Represents a CancelOperationRequest. */
        class CancelOperationRequest implements ICancelOperationRequest {

            /**
             * Constructs a new CancelOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.ICancelOperationRequest);

            /** CancelOperationRequest name. */
            public name: string;

            /**
             * Creates a new CancelOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelOperationRequest instance
             */
            public static create(properties?: google.longrunning.ICancelOperationRequest): google.longrunning.CancelOperationRequest;

            /**
             * Encodes the specified CancelOperationRequest message. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CancelOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.CancelOperationRequest;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.CancelOperationRequest;

            /**
             * Verifies a CancelOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.CancelOperationRequest;

            /**
             * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
             * @param message CancelOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.CancelOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeleteOperationRequest. */
        interface IDeleteOperationRequest {

            /** DeleteOperationRequest name */
            name?: (string|null);
        }

        /** Represents a DeleteOperationRequest. */
        class DeleteOperationRequest implements IDeleteOperationRequest {

            /**
             * Constructs a new DeleteOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IDeleteOperationRequest);

            /** DeleteOperationRequest name. */
            public name: string;

            /**
             * Creates a new DeleteOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteOperationRequest instance
             */
            public static create(properties?: google.longrunning.IDeleteOperationRequest): google.longrunning.DeleteOperationRequest;

            /**
             * Encodes the specified DeleteOperationRequest message. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.DeleteOperationRequest;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.DeleteOperationRequest;

            /**
             * Verifies a DeleteOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.DeleteOperationRequest;

            /**
             * Creates a plain object from a DeleteOperationRequest message. Also converts values to other types if specified.
             * @param message DeleteOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.DeleteOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WaitOperationRequest. */
        interface IWaitOperationRequest {

            /** WaitOperationRequest name */
            name?: (string|null);

            /** WaitOperationRequest timeout */
            timeout?: (google.protobuf.IDuration|null);
        }

        /** Represents a WaitOperationRequest. */
        class WaitOperationRequest implements IWaitOperationRequest {

            /**
             * Constructs a new WaitOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IWaitOperationRequest);

            /** WaitOperationRequest name. */
            public name: string;

            /** WaitOperationRequest timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /**
             * Creates a new WaitOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaitOperationRequest instance
             */
            public static create(properties?: google.longrunning.IWaitOperationRequest): google.longrunning.WaitOperationRequest;

            /**
             * Encodes the specified WaitOperationRequest message. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WaitOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.WaitOperationRequest;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.WaitOperationRequest;

            /**
             * Verifies a WaitOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaitOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.WaitOperationRequest;

            /**
             * Creates a plain object from a WaitOperationRequest message. Also converts values to other types if specified.
             * @param message WaitOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.WaitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OperationInfo. */
        interface IOperationInfo {

            /** OperationInfo responseType */
            responseType?: (string|null);

            /** OperationInfo metadataType */
            metadataType?: (string|null);
        }

        /** Represents an OperationInfo. */
        class OperationInfo implements IOperationInfo {

            /**
             * Constructs a new OperationInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperationInfo);

            /** OperationInfo responseType. */
            public responseType: string;

            /** OperationInfo metadataType. */
            public metadataType: string;

            /**
             * Creates a new OperationInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationInfo instance
             */
            public static create(properties?: google.longrunning.IOperationInfo): google.longrunning.OperationInfo;

            /**
             * Encodes the specified OperationInfo message. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationInfo message, length delimited. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.OperationInfo;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.OperationInfo;

            /**
             * Verifies an OperationInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationInfo
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.OperationInfo;

            /**
             * Creates a plain object from an OperationInfo message. Also converts values to other types if specified.
             * @param message OperationInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.OperationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
