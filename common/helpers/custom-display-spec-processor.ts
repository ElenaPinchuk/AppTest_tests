import { DisplayProcessor } from 'jasmine-spec-reporter';
import { Configuration } from 'jasmine-spec-reporter/built/configuration';

export class CustomDisplaySpecProcessor extends DisplayProcessor {
	private hostIp: string;

	constructor(configuration: Configuration) {
		super(configuration);
		this.hostIp = configuration.customOptions.hostIp;
	}

	public displaySuite(spec: any, log: string): string {
		return `${log} (chrome host: ${this.hostIp} )`;
	}
}
