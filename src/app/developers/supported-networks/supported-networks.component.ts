import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supported-networks',
  templateUrl: './supported-networks.component.html',
  styleUrls: ['./supported-networks.component.scss'],
})
export class SupportedNetworksComponent implements OnInit {
  supportedNetworks = [
    {
      title: 'PegaSys Plus',
      description: 'Builds on Hyperledger Besu, PegaSys Plus deliverrs features',
      image: 'assets/images/network-tile.png',
    },
    {
      title: 'PegaSys Plus',
      description: 'Builds on Hyperledger Besu, PegaSys Plus deliverrs features',
      image: 'assets/images/network-tile.png',
    },
    {
      title: 'PegaSys Plus',
      description: 'Builds on Hyperledger Besu, PegaSys Plus deliverrs features',
      image: 'assets/images/network-tile.png',
    },
    {
      title: 'PegaSys Plus',
      description: 'Builds on Hyperledger Besu, PegaSys Plus deliverrs features',
      image: 'assets/images/network-tile.png',
    },
    {
      title: 'PegaSys Plus',
      description: 'Builds on Hyperledger Besu, PegaSys Plus deliverrs features',
      image: 'assets/images/network-tile.png',
    },
    {
      title: 'PegaSys Plus',
      description: 'Builds on Hyperledger Besu, PegaSys Plus deliverrs features',
      image: 'assets/images/network-tile.png',
    },
    {
      title: 'PegaSys Plus',
      description: 'Builds on Hyperledger Besu, PegaSys Plus deliverrs features',
      image: 'assets/images/network-tile.png',
    },
    {
      title: 'PegaSys Plus',
      description: 'Builds on Hyperledger Besu, PegaSys Plus deliverrs features',
      image: 'assets/images/network-tile.png',
    },
    {
      title: 'PegaSys Plus',
      description: 'Builds on Hyperledger Besu, PegaSys Plus deliverrs features',
      image: 'assets/images/network-tile.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
