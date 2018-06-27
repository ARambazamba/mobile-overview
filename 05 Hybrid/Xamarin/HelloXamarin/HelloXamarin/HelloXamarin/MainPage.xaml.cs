using JavaScriptCore;
using Newtonsoft.Json;
using Org.Json;
using smartSammlerAPI;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace HelloXamarin
{
	public partial class MainPage : ContentPage
	{        
 
        public MainPage()
        {
            InitializeComponent();
            Title = "smart Markers";            
            LoadMarkers();
        }

        private void LoadMarkers()
        {
            string json = @"[
        {
            id: 1000,
          imgURL: '/assets/images/eis.png',
          lable: 'Waldviertel',
          type: 1,
          lat: 48.5839237,
          lng: 15.4276355,
          remark:
                'Als Beere gilt in der Botanik eine aus einem einzigen Fruchtknoten hervorgegangene Schließfrucht, bei der die komplette Fruchtwand (Perikarp) auch noch bei der Reife saftig oder mindestens fleischig ist',
          picture: null
        },
        {
            id: 1001,
          imgURL: '/assets/images/schwammerl.png',
          lable: 'Steiermark',
          type: 3,
          lat: 47.5308866,
          lng: 15.9476211,
          remark:
                'Schwammerl ist die Bezeichnung für Großpilze in Österreich -  Gemeint sind damit nicht alle Pilze im biologischen Sinn, sondern die Fruchtkörper essbarer Pilzarten',
          picture: null
        },
        {
            id: 1002,
          imgURL: '/assets/images/holler.png',
          lable: 'Neuwaldegg',
          type: 2,
          lat: 48.234201,
          lng: 16.277753,
          remark:
                'Holunder-Arten sind meist verholzende Pflanzen und wachsen als Halbsträucher, Sträucher oder kleine Bäume',
          picture: null
        }
      ]";

            markerView.ItemsSource = JsonConvert.DeserializeObject<Marker[]>(json);
        }

        private async void markerTapped(object sender, ItemTappedEventArgs e)
        {            
            if (e == null) return;
            var marker = e.Item as Marker;
            await Navigation.PushAsync(new MarkerDetailsPage(marker), true);            
        }
    }
}
