import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Camera } from 'lucide-react';
import { useStore } from '../store/useStore';
import ArticleCard from '../components/ArticleCard/ArticleCard';
import GalleryGrid from '../components/Gallery/GalleryGrid';
import NewsletterSignup from '../components/Newsletter/NewsletterSignup';
import { MOCK_ARTICLES, MOCK_IMAGES } from '../data/mockData';

export default function Home() {
  const { setArticles, setEventImages, articles } = useStore();

  useEffect(() => {
    setArticles(MOCK_ARTICLES);
    setEventImages(MOCK_IMAGES);
  }, [setArticles, setEventImages]);

  const featuredArticles = articles.filter((a) => a.featured).slice(0, 3);
  const recentArticles = articles.slice(0, 6);

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark via-blue-900 to-brand-primary text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 inline-block bg-brand-accent bg-opacity-20 px-4 py-2 rounded-full">
            <span className="text-brand-accent font-semibold text*
