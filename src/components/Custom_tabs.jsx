import React, { useState } from 'react';
import ImageOne from '../assets/png/ImageOne.png'
import ImageTwo from '../assets/png/ImageTwo.png'
import ImageThree from '../assets/png/imagethree.png'
import ImageFour from '../assets/png/ImageFour.png'
const Custom_tabs = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className='container '>
                <div className='pt-5'>
                    <div className="tab-content">
                        {activeTab === 'tab1' && <p className='text-center'>
                            <div className="row">
                                <div className="col-12 col-md-7 col-lg-6">
                                    <img className='img_top' src={ImageOne} alt="ImageOne" />
                                </div>
                                <div className="col-12 col-md-5 col-lg-6 text-start">
                                    <h2 className='mt-4 mt-md-0'>
                                        Lorem ipsum
                                    </h2>
                                    <p >Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam.  </p>
                                    <p >Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam. </p>
                                    <button className='bg-danger px-5 py-2 text-white rounded-3 text-start'>Button</button>
                                </div>
                            </div>
                        </p>}
                        {activeTab === 'tab2' && <p className='text-center'>
                        <div className="row">
                                <div className="col-12 col-md-7 col-lg-6">
                                    <img className='img_top' src={ImageTwo} alt="ImageOne" />
                                </div>
                                <div className="col-12 col-md-5 col-lg-6 text-start">
                                    <h2 className='mt-4 mt-md-0'>
                                        Lorem ipsum
                                    </h2>
                                    <p >Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam.Hac posuere eget nam diam velit urna adipiscing diam.Hac posuere eget nam diam velit urna adipiscing diam.  </p>
                                    <p >Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam. .</p>
                                    <button className='bg-danger px-5 py-2 text-white rounded-3 text-start'>Button</button>
                                </div>
                            </div>
                        </p>}
                        {activeTab === 'tab3' && <p className='text-center'>
                        <div className="row">
                                <div className="col-12 col-md-7 col-lg-6">
                                    <img className='img_top' src={ImageThree} alt="ImageOne" />
                                </div>
                                <div className="col-12 col-md-5 col-lg-6 text-start">
                                    <h2 className='mt-4 mt-md-0'>
                                        Lorem ipsum
                                    </h2>
                                    <p >Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam.  </p>
                                    <p >Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam. Hac posuere eget nam diam velit urna adipiscing diam.Hac posuere eget nam diam velit urna adipiscing diam..</p>
                                    <button className='bg-danger px-5 py-2 text-white rounded-3 text-start'>Button</button>
                                </div>
                            </div>
                        </p>}
                        {activeTab === 'tab4' && <p className='text-center'>
                        <div className="row">
                                <div className="col-12 col-md-7 col-lg-6">
                                    <img className='img_top' src={ImageFour} alt="ImageOne" />
                                </div>
                                <div className="col-12 col-md-5 col-lg-6 text-start">
                                    <h2 className='mt-4 mt-md-0'>
                                        Lorem ipsum
                                    </h2>
                                    <p >Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam.  </p>
                                    <p >Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum suspendisse quam. Hac posuere eget nam diam velit urna adipiscing diam. .</p>
                                    <button className='bg-danger px-5 py-2 text-white rounded-3 text-start'>Button</button>
                                </div>
                            </div>
                        </p>}
                    </div>
                    <div className="tab-buttons d-flex justify-content-center flex-wrap align-items-center">
                        <button onClick={() => handleTabClick('tab1')} className={activeTab === 'tab1' ? 'active' : ''}>
                            <img className='w-100' src={ImageOne} alt="ImageOne" />
                        </button>
                        <button onClick={() => handleTabClick('tab2')} className={activeTab === 'tab2' ? 'active' : ''}>
                            <img className='w-100' src={ImageTwo} alt="ImageOne" />
                        </button>
                        <button onClick={() => handleTabClick('tab3')} className={activeTab === 'tab3' ? 'active' : ''}>
                            <img className='w-100' src={ImageThree} alt="ImageOne" />
                        </button>
                        <button onClick={() => handleTabClick('tab4')} className={activeTab === 'tab4' ? 'active' : ''}>
                            <img className='w-100' src={ImageFour} alt="ImageOne" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Custom_tabs;
