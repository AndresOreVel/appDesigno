import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { TouchComponent } from "../touch/touch.component";
import { isPlatformBrowser } from '@angular/common';
import { GeocodingService } from '../geocoding.service';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [TouchComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
    private geocoding: GeocodingService) { }

  locations = [
    {
      id: 'map-canada',
      name: 'Toronto office',
      address: '3886 Wellington Street, Toronto Ontario M9C 3J5'
    },
    {
      id: 'map-australia',
      name: 'Autralia office',
      address: '19 Balonne Street, New South Wales 2443, Australia'
    },
    {
      id: 'map-uk',
      name: 'UK office',
      address: 'Rhyd-y-fro'
    }
  ];

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const leafletModule = await import('leaflet');
      const L = leafletModule.default;

      delete (L.Icon.Default.prototype as any)._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'assets/images/leaflet/marker-icon-2x.png',
        iconUrl: 'assets/images/leaflet/marker-icon.png',
        shadowUrl: 'assets/images/leaflet/marker-shadow.png',
      });

      this.locations.forEach(location => {
        this.createMap(L, location.id, location.address, location.name);
      });
    }
  }

  private createMap(L: any, id: string, address: string, title: string) {
    const map = L.map(id, {
      
    }).setView([0, 0], 2);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap © CARTO'
    }).addTo(map);

    this.geocoding.search(address).subscribe(result => {
      if(result.length){
        const lat = +result[0].lat;
        const lon = +result[0].lon;

        map.setView([lat, lon], 14);

        L.marker([lat, lon])
        .addTo(map)
        .bindPopup(`<strong>${title}</strong><br>${address}`);
      }
    });
  }
}
