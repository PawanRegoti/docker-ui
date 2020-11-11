import { Component, OnInit } from '@angular/core';
import { version } from 'process';

@Component({
  selector: 'app-docker-compose',
  templateUrl: './docker-compose.component.html',
  styleUrls: ['./docker-compose.component.css']
})
export class DockerComposeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  version : string;
  serviceName : string;
  image : string;
  buildContext : string;
  buildDockerFile : string;
  buildArgs : Record<string, string>[];
  containerName : string;
  restartPolicy : string;
  environmentVariables: Record<string, string>[];
  ports: Record<number, number>[];
  volumes: Record<string, string>[];
  workingDirectory: string;
  entrypoint: string;
  healthCheck: string;
}
