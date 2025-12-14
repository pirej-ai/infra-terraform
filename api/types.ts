// types.ts

interface TerraformProvider {
  name: string;
  endpoint: string;
  token: string;
}

interface TerraformConfig {
  terraformProvider: TerraformProvider;
  workingDirectory: string;
  terraformVersion: string;
}

interface Workspace {
  name: string;
  path: string;
}

interface TerraformWorkspace {
  name: string;
  path: string;
  workingDirectory: string;
}

interface TerraformState {
  path: string;
}

interface Configuration {
  terraform: TerraformConfig;
  workspace: Workspace;
  state: TerraformState;
}

interface Provider {
  name: string;
  endpoint: string;
  token: string;
}

interface Config {
  providers: Provider[];
  terraformVersion: string;
}

interface StackConfig {
  providers: TerraformProvider[];
  terraformVersion: string;
  workingDirectory: string;
}

interface State {
  path: string;
}

interface Workspace {
  name: string;
  path: string;
  state: State;
}

interface Configuration {
  stack: StackConfig;
  workspace: Workspace;
}

interface TerraformInfrastructureConfig {
  configuration: Configuration;
}

type ProviderType = 'aws' | 'azure' | 'gcp' | 'alicloud';

type TerraformConfigType = 'local' | 'remote' | 'remote-exec';

type TerraformStateType = 'local' | 'remote';

type TerraformVersion = '0.14.11' | '0.15.5' | '0.16.2';