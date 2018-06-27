using smartSammlerAPI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace HelloXamarin
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class MarkerDetailsPage : ContentPage
	{
        private Marker current;

		public MarkerDetailsPage ()
		{
			InitializeComponent ();            
        }

        public MarkerDetailsPage(Marker m)
        {
            InitializeComponent();
            this.current = m;
            Title = m.lable;
        }
	}
}