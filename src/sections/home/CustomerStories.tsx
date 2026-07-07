/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Badge } from '../../components/ui/Badge';
import { Heading } from '../../components/ui/Heading';
import { customerStoriesData, CustomerStory } from '../../data/customerStories';
import './CustomerStories.css';

export default function CustomerStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalStories = customerStoriesData.length;

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 60; // drag threshold in pixels to change active slide
    if (info.offset.x < -threshold) {
      // Swiped left -> show next slide
      setActiveIndex((prev) => (prev + 1) % totalStories);
    } else if (info.offset.x > threshold) {
      // Swiped right -> show previous slide
      setActiveIndex((prev) => (prev - 1 + totalStories) % totalStories);
    }
  };

  // Maps logoTypes to beautifully rendered, vector-crisp corporate identity headers
  const renderLogo = (logoType: 'orlando' | 'providence' | 'vanderbilt') => {
    switch (logoType) {
      case 'orlando':
        return (
          <div className="flex flex-col items-center justify-center text-center select-none" id="logo-orlando-svg">
            <span 
              className="text-3xl font-medium tracking-[0.06em] uppercase text-[#0B1E30] leading-none" 
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Orlando
            </span>
            <span 
              className="text-2xl tracking-[0.15em] uppercase text-[#0B1E30] font-medium mt-1 leading-none relative"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Health<span className="text-[10px] absolute -top-1 -right-2.5 font-sans font-normal">®</span>
            </span>
          </div>
        );
      case 'providence':
        return (
          <div className="flex flex-col items-center justify-center text-center select-none" id="logo-providence-svg">
            <div className="flex items-center justify-center space-x-1.5 mb-1">
              <svg className="w-5 h-5 text-[#0B1E30]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2v20M5 9h14" />
              </svg>
              <span 
                className="text-2xl font-medium tracking-[0.04em] uppercase text-[#0B1E30] leading-none"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Providence
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#555d6b] font-sans mt-0.5 font-semibold">
              Health & Services
            </span>
          </div>
        );
      case 'vanderbilt':
        return (
          <div className="flex flex-col items-center justify-center text-center select-none" id="logo-vanderbilt-svg">
            <span 
              className="text-3xl font-medium tracking-[0.04em] uppercase text-[#0B1E30] leading-none"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Vanderbilt
            </span>
            <span 
              className="text-xs uppercase tracking-[0.3em] text-[#555d6b] font-sans mt-1 leading-none font-semibold"
            >
              University Medical Center
            </span>
          </div>
        );
    }
  };

  // Helper mapping to key positions around the active card
  const getPositionStyles = (diff: number) => {
    if (diff === 0) {
      return {
        left: '50%',
        x: '-50%',
        scale: 1,
        opacity: 1,
        zIndex: 20,
        pointerEvents: 'auto' as const,
      };
    }
    if (diff === -1) {
      return {
        left: isMobile ? '-15%' : 'calc(50% - 480px)',
        x: '-50%',
        scale: isMobile ? 0.75 : 0.82,
        opacity: isMobile ? 0.2 : 0.45,
        zIndex: 10,
        pointerEvents: 'auto' as const,
      };
    }
    if (diff === 1) {
      return {
        left: isMobile ? '115%' : 'calc(50% + 480px)',
        x: '-50%',
        scale: isMobile ? 0.75 : 0.82,
        opacity: isMobile ? 0.2 : 0.45,
        zIndex: 10,
        pointerEvents: 'auto' as const,
      };
    }
    // Cards outside the instant preview view are translated completely out of view
    return {
      left: diff < 0 ? '-100%' : '200%',
      x: '-50%',
      scale: 0.7,
      opacity: 0,
      zIndex: 1,
      pointerEvents: 'none' as const,
    };
  };

  // Setup keyboard accessibility trigger
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      setActiveIndex((prev) => (prev + 1) % totalStories);
    } else if (e.key === 'ArrowLeft') {
      setActiveIndex((prev) => (prev - 1 + totalStories) % totalStories);
    }
  };

  return (
    <section 
      className="customer-stories-section border-b border-brand-gray-200" 
      id="customer-stories"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Customer Success Stories Carousel"
    >
      <div className="customer-stories-container">
        
        {/* Centered Badge Indicator */}
        <div className="customer-stories-badge-wrapper">
          <Badge variant="dark" id="customer-stories-badge">
            Customer Stories
          </Badge>
        </div>

        {/* Section Header */}
        <div className="customer-stories-header">
          <Heading level={2} className="customer-stories-title" id="customer-stories-heading">
            Real outcomes from real deployments
          </Heading>
          <p className="customer-stories-subtitle" id="customer-stories-subtitle">
            See how leading health systems, payers, and programs are transforming themselves.
          </p>
        </div>

        {/* Dynamic Showcase Area with Custom Gradient Frame */}
        <div className="customer-stories-showcase" id="customer-stories-showcase-box">
          <div className="customer-stories-carousel" id="customer-stories-carousel-viewport">
            
            {customerStoriesData.map((story, i) => {
              // Wrap indices to represent previous, current, and next slides
              let diff = i - activeIndex;
              if (diff < -1) diff += totalStories;
              if (diff > 1) diff -= totalStories;

              const position = getPositionStyles(diff);
              const isActive = diff === 0;

              return (
                <motion.div
                  key={story.id}
                  className="customer-story-card flex flex-col"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    pointerEvents: position.pointerEvents,
                  }}
                  animate={{
                    left: position.left,
                    x: position.x,
                    y: '-50%',
                    scale: position.scale,
                    opacity: position.opacity,
                    zIndex: position.zIndex,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 280,
                    damping: 28,
                  }}
                  drag={isActive ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.4}
                  onDragEnd={isActive ? handleDragEnd : undefined}
                  onClick={() => !isActive && setActiveIndex(i)}
                  aria-hidden={!isActive}
                  id={`customer-story-card-${story.id}`}
                >
                  {/* Brand Logo Container */}
                  <div className="customer-story-logo-box">
                    {renderLogo(story.logoType)}
                  </div>

                  {/* Core Customer Metrics Panel */}
                  <div className="customer-story-metrics">
                    {story.metrics.map((metric, idx) => (
                      <div 
                        className="customer-story-metric-row" 
                        key={idx}
                        id={`story-metric-${story.id}-${idx}`}
                      >
                        <span className="customer-story-metric-value">
                          {metric.value}
                        </span>
                        <span className="customer-story-metric-label">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                </motion.div>
              );
            })}

          </div>

          {/* Interactive Progress Track Bar (Figma Spec: 196px x 8px) */}
          <div className="customer-stories-progress-track" id="customer-stories-progress-track">
            {customerStoriesData.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Show customer story slide ${i + 1}`}
                className="customer-stories-track-step"
                id={`customer-stories-track-step-${i}`}
              />
            ))}
            <motion.div
              className="customer-stories-track-thumb"
              id="customer-stories-track-thumb"
              animate={{
                left: `${(activeIndex / totalStories) * 100}%`,
              }}
              style={{
                width: `${(1 / totalStories) * 100}%`,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 28,
              }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
