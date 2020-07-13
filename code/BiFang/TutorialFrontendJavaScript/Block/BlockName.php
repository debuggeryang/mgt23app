<?php
namespace BiFang\TutorialFrontendJavaScript\Block;

/**
 * Class BlockName
 */
class BlockName extends \Magento\Framework\View\Element\Template
{

    /**
     * @var array
     */
    protected $jsLayout;

    /**
     * @var array|\Magento\Checkout\Block\Checkout\LayoutProcessorInterface[]
     */
    protected $layoutProcessors;

    /**
     * @param \Magento\Framework\View\Element\Template\Context $context
     * @param array $layoutProcessors
     * @param array $data
     */
    public function __construct(
      \Magento\Framework\View\Element\Template\Context $context,
      array $layoutProcessors = [],
      array $data = []
    ) {
      parent::__construct($context, $data);
      $this->jsLayout = isset($data['jsLayout']) && is_array($data['jsLayout']) ? $data['jsLayout'] : [];
      $this->layoutProcessors = $layoutProcessors;
    }

    function _prepareLayout(){}

    public function getJsLayout() {
      foreach ($this->layoutProcessors as $processor) {
          $this->jsLayout = $processor->process($this->jsLayout);
      }
      return json_encode($this->jsLayout, JSON_HEX_TAG);
    }

    public function getBlockConfig() {
      return json_encode(
        array(
          "template" => "BiFang_TutorialFrontendJavaScript/component-template",
          "jsSource" => "in phtml",
          "templateSource" => "in Block",
          "dataSource" => "from Block",
          "extended" => "No"
        )
      );
    }

}
