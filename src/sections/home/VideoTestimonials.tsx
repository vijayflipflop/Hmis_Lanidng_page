/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Volume2, VolumeX } from 'lucide-react';
import './VideoTestimonials.css';

interface VideoTeamMember {
  id: number;
  name: string;
  role: string;
  thumbnail: string;
  videoUrl: string;
}

export default function VideoTestimonials() {
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const teamVideos: VideoTeamMember[] = [
    {
      id: 1,
      name: 'Alex Bean',
      role: 'Hospital Administrator',
      thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=750&fm=webp',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-female-doctor-welcoming-a-patient-at-her-office-40340-large.mp4',
    },
    {
      id: 2,
      name: 'Dr. Sarah Jenkins',
      role: 'Senior Physician',
      thumbnail: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=750&fm=webp',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-doctor-explaining-something-on-a-tablet-40341-large.mp4',
    },
    {
      id: 3,
      name: 'Marcus Vance',
      role: 'Operations & Lab Manager',
      thumbnail: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=600&h=750&fm=webp',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-medical-professional-working-in-a-lab-40337-large.mp4',
    },
  ];

  const handlePlayVideo = (id: number) => {
    setActiveVideoId(id);
    // Give state a moment to update and render the video, then ensure it plays
    setTimeout(() => {
      const videoEl = videoRefs.current[id];
      if (videoEl) {
        videoEl.muted = isMuted;
        videoEl.play().catch((err) => {
          console.log('Video auto-play block handled:', err);
        });
      }
    }, 50);
  };

  const handleStopVideo = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    const videoEl = videoRefs.current[id];
    if (videoEl) {
      videoEl.pause();
    }
    setActiveVideoId(null);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (activeVideoId !== null) {
      const videoEl = videoRefs.current[activeVideoId];
      if (videoEl) {
        videoEl.muted = nextMuted;
      }
    }
  };

  return (
    <section className="video-testimonials-section" id="video-testimonials">
      <div className="video-testimonials-container">
        
        {/* Section Header */}
        <div className="video-testimonials-header" id="video-testimonials-header">
          <h2 className="video-testimonials-title" id="video-testimonials-title">
            Trusted by Healthcare Teams That Deliver Better Care
          </h2>
          <p className="video-testimonials-subtitle" id="video-testimonials-subtitle">
            Hear directly from hospital administrators, doctors, laboratory teams, and operations leaders who
            transformed their daily workflows with Healthmed HMIS.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="video-testimonials-grid" id="video-testimonials-grid">
          {teamVideos.map((member) => {
            const isPlaying = activeVideoId === member.id;

            return (
              <div
                key={member.id}
                className={`video-testimonial-card ${isPlaying ? 'is-playing' : ''}`}
                onClick={() => !isPlaying && handlePlayVideo(member.id)}
                id={`video-testimonial-card-${member.id}`}
              >
                {/* Card Background / Thumbnail Image */}
                <img
                  src={member.thumbnail}
                  alt={member.name}
                  className="video-card-thumbnail"
                  id={`video-card-thumbnail-${member.id}`}
                  referrerPolicy="no-referrer"
                />

                {/* Smooth Video Layer overlay */}
                <AnimatePresence mode="wait">
                  {isPlaying && (
                    <motion.div
                      className="video-player-wrapper"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      id={`video-player-wrapper-${member.id}`}
                    >
                      <video
                        ref={(el) => {
                          videoRefs.current[member.id] = el;
                        }}
                        src={member.videoUrl}
                        className="video-player-element"
                        playsInline
                        loop
                        controls={false}
                        id={`video-player-element-${member.id}`}
                        onEnded={() => setActiveVideoId(null)}
                      />
                      
                      {/* Playback Controls Overlay inside card */}
                      <div className="video-overlay-controls" id={`video-controls-${member.id}`}>
                        <button
                          className="video-control-btn mute-btn"
                          onClick={toggleMute}
                          aria-label={isMuted ? "Unmute video" : "Mute video"}
                          id={`video-mute-btn-${member.id}`}
                        >
                          {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
                        </button>
                        <button
                          className="video-control-btn close-btn"
                          onClick={(e) => handleStopVideo(e, member.id)}
                          aria-label="Close video player"
                          id={`video-close-btn-${member.id}`}
                        >
                          <X className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Centered Play Button overlay (visible when not playing) */}
                {!isPlaying && (
                  <div className="video-play-trigger" id={`play-trigger-${member.id}`}>
                    <div className="video-play-circle">
                      <Play className="video-play-icon" />
                    </div>
                  </div>
                )}

                {/* Premium Frosted Glass Text Overlay (Figma inspired) */}
                <div className="video-card-frosted-overlay" id={`card-frosted-overlay-${member.id}`}>
                  <h3 className="video-member-name" id={`member-name-${member.id}`}>{member.name}</h3>
                  <p className="video-member-role" id={`member-role-${member.id}`}>{member.role}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
