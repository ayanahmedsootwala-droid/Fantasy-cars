import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/contexts/AuthContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CompareProvider } from '@/contexts/CompareContext';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { useSiteSettings } from '@/hooks/useSiteSettings';
import HomePage from '@/pages/HomePage';
import InventoryPage from '@/pages/InventoryPage';
import CarDetailPage from '@/pages/CarDetailPage';
import ComparePage from '@/pages/ComparePage';
import AuctionsListPage from '@/pages/AuctionsListPage';
import AuctionDetailPage from '@/pages/AuctionDetailPage';
import BlogPage from '@/pages/BlogPage';
import SellCarPage from '@/pages/SellCarPage';
import UserDashboardPage from '@/pages/UserDashboardPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import NotFoundPage from '@/pages/NotFoundPage';
import DealerPublicPage from '@/pages/DealerPublicPage';
import ContactPage from '@/pages/ContactPage';
import DealershipDashboard from '@/pages/dealership/DealershipDashboard';
import DealershipInventory from '@/pages/dealership/DealershipInventory';
import DealershipLeads from '@/pages/dealership/DealershipLeads';
import DealershipSales from '@/pages/dealership/DealershipSales';
import DealershipAnalytics from '@/pages/dealership/DealershipAnalytics';
import DealershipCommunication from '@/pages/dealership/DealershipCommunication';
import DealershipTeam from '@/pages/dealership/DealershipTeam';
import DealershipActivity from '@/pages/dealership/DealershipActivity';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminInventory from '@/pages/admin/AdminInventory';
import AdminModeration from '@/pages/admin/AdminModeration';
import AdminVehicleDatabase from '@/pages/admin/AdminVehicleDatabase';
import AdminUsers from '@/pages/admin/AdminUsers';
import AdminDealerships from '@/pages/admin/AdminDealerships';
import AdminAuctions from '@/pages/admin/AdminAuctions';
import AdminAuctionAnalytics from '@/pages/admin/AdminAuctionAnalytics';
import AdminAnalytics from '@/pages/admin/AdminAnalytics';
import AdminInquiries from '@/pages/admin/AdminInquiries';
import AdminBlog from '@/pages/admin/AdminBlog';
import AdminTestimonials from '@/pages/admin/AdminTestimonials';
import AdminBrands from '@/pages/admin/AdminBrands';
import AdminHomepageSections from '@/pages/admin/AdminHomepageSections';
import AdminBrandCarousel from '@/pages/admin/AdminBrandCarousel';
import AdminHeroBanner from '@/pages/admin/AdminHeroBanner';
import AdminTheme from '@/pages/admin/AdminTheme';
import AdminBrandSettings from '@/pages/admin/AdminBrandSettings';
import AdminSeoSettings from '@/pages/admin/AdminSeoSettings';
import AdminSettings from '@/pages/admin/AdminSettings';
import AdminPerformance from '@/pages/admin/AdminPerformance';
import AdminReports from '@/pages/admin/AdminReports';
import AdminImageCompression from '@/pages/admin/AdminImageCompression';
import AdminNumberPlateBlur from '@/pages/admin/AdminNumberPlateBlur';
import AdminGithub from '@/pages/admin/AdminGithub';
import AdminSourceCode from '@/pages/admin/AdminSourceCode';

// Guard component: redirects to homepage when auctions feature is disabled
function AuctionFeatureGuard({ children }: { children: React.ReactNode }) {
  const { getSetting } = useSiteSettings();
  const navigate = useNavigate();
  const auctionsOn = getSetting('auctions_feature_enabled', 'true') !== 'false';
  React.useEffect(() => {
    if (!auctionsOn) navigate('/', { replace: true });
  }, [auctionsOn, navigate]);
  if (!auctionsOn) return null;
  return <>{children}</>;
}

const App: React.FC = () => {
  return (
    <HelmetProvider>
    <Router>
      <AuthProvider>
        <LanguageProvider>
          <CompareProvider>
            <ScrollToTop />
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/inventory" element={<InventoryPage />} />
              <Route path="/car/:id" element={<CarDetailPage />} />
              <Route path="/compare" element={<ComparePage />} />
              <Route path="/auctions" element={<AuctionFeatureGuard><AuctionsListPage /></AuctionFeatureGuard>} />
              <Route path="/auction/:id" element={<AuctionDetailPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPage />} />
              <Route path="/sell" element={<SellCarPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/dashboard" element={<UserDashboardPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              {/* Dealership portal */}
              <Route path="/dealership" element={<DealershipDashboard />} />
              <Route path="/dealership/inventory" element={<DealershipInventory />} />
              <Route path="/dealership/leads" element={<DealershipLeads />} />
              <Route path="/dealership/sales" element={<DealershipSales />} />
              <Route path="/dealership/analytics" element={<DealershipAnalytics />} />
              <Route path="/dealership/communication" element={<DealershipCommunication />} />
              <Route path="/dealership/team" element={<DealershipTeam />} />
              <Route path="/dealership/activity" element={<DealershipActivity />} />

              {/* Admin panel */}
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/inventory" element={<AdminInventory />} />
              <Route path="/admin/moderation" element={<AdminModeration />} />
              <Route path="/admin/vehicle-database" element={<AdminVehicleDatabase />} />
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/dealerships" element={<AdminDealerships />} />
              <Route path="/admin/auctions" element={<AdminAuctions />} />
              <Route path="/admin/auction-analytics" element={<AdminAuctionAnalytics />} />
              <Route path="/admin/analytics" element={<AdminAnalytics />} />
              <Route path="/admin/performance" element={<AdminPerformance />} />
              <Route path="/admin/reports" element={<AdminReports />} />
              <Route path="/admin/inquiries" element={<AdminInquiries />} />
              <Route path="/admin/blog" element={<AdminBlog />} />
              <Route path="/admin/testimonials" element={<AdminTestimonials />} />
              <Route path="/admin/brands" element={<AdminBrands />} />
              <Route path="/admin/homepage-sections" element={<AdminHomepageSections />} />
              <Route path="/admin/brand-carousel" element={<AdminBrandCarousel />} />
              <Route path="/admin/hero-banner" element={<AdminHeroBanner />} />
              <Route path="/admin/theme" element={<AdminTheme />} />
              <Route path="/admin/brand-settings" element={<AdminBrandSettings />} />
              <Route path="/admin/seo-settings" element={<AdminSeoSettings />} />
              <Route path="/admin/settings" element={<AdminSettings />} />
              <Route path="/admin/image-compression" element={<AdminImageCompression />} />
              <Route path="/admin/plate-blur" element={<AdminNumberPlateBlur />} />
              <Route path="/admin/github" element={<AdminGithub />} />
              <Route path="/admin/source-code" element={<AdminSourceCode />} />

              <Route path="/dealer/:id" element={<DealerPublicPage />} />

              {/* 404 */}
              <Route path="/404" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Toaster richColors position="top-right" />
          </CompareProvider>
        </LanguageProvider>
      </AuthProvider>
    </Router>
    </HelmetProvider>
  );
};

export default App;
